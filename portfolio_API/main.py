from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import EmailStr
import smtplib
import os
from email.mime.text import MIMEText
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow CORS for frontend testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict to your frontend domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/contact")
async def send_email(name: str = Form(...), email: EmailStr = Form(...), message: str = Form(...)):
    try:
        smtp_host = os.getenv("SMTP_HOST")
        smtp_port = int(os.getenv("SMTP_PORT"))
        username = os.getenv("EMAIL_USERNAME")
        password = os.getenv("EMAIL_PASSWORD")
        to_address = os.getenv("EMAIL_TO")

        # Create the email
        body = f"New message from {name} ({email}):\n\n{message}"
        msg = MIMEText(body)
        msg["Subject"] = f"New Contact Message from {name}"
        msg["From"] = username
        msg["To"] = to_address

        # Send email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(username, password)
            server.send_message(msg)

        return {"success": True, "message": "Message sent successfully."}

    except Exception as e:
        return {"success": False, "message": str(e)}
