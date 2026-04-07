import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact API endpoint
  app.post("/api/contact", async (req, res) => {
    const { name, phone, email, description } = req.body;

    if (!name || !phone || !email || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      // For demo purposes, we'll return success even if the key is missing, 
      // but we'll log it.
      return res.json({ 
        success: true, 
        message: "Form received (Demo mode: RESEND_API_KEY missing)" 
      });
    }

    const resend = new Resend(resendApiKey);

    try {
      const { data, error } = await resend.emails.send({
        from: "Physiovanta <onboarding@resend.dev>",
        to: ["physiovanta@gmail.com"],
        subject: `New Consultation Request from ${name}`,
        html: `
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Description:</strong></p>
          <p>${description.replace(/\n/g, "<br>")}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      res.json({ success: true, data });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
