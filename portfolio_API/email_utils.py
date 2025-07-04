import os
from aiosmtplib import send
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

async def send_contact_email(name: str, email: str, message: str):
    msg = EmailMessage()
    msg["From"] = os.getenv("EMAIL_USERNAME")
    msg["To"] = os.getenv("EMAIL_TO")
    msg["Subject"] = f"New message from {name}"

    msg.set_content(f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}")

    await send(
        msg,
        hostname=os.getenv("SMTP_HOST"),
        port=int(os.getenv("SMTP_PORT")),
        username=os.getenv("EMAIL_USERNAME"),
        password=os.getenv("EMAIL_PASSWORD"),
        start_tls=True,
    )