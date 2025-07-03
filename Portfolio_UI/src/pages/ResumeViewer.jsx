import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ResumeViewer = () => {
  const resumePath = "/Keerthipriya_s_Resume.pdf";
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      padding: isMobile ? "1rem" : "2rem",
      fontFamily: "'Inter', sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: isMobile ? "1.5rem" : "2rem",
    },
    viewerWrapper: {
      height: isMobile ? "70vh" : "80vh",
      border: "1px solid #ccc",
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Resume</h2>

      <div style={styles.viewerWrapper}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={resumePath} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    </div>
  );
};

export default ResumeViewer;
