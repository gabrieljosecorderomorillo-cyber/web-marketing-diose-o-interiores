import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const ai = new GoogleGenAI({ 
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // AI Support Chat
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Mensaje requerido" });
      }

      const systemInstruction = `Eres el asistente virtual con IA de Vanguardia, la agencia boutique de marketing digital y branding especializada exclusivamente en estudios de arquitectura y diseño de interiores.
      Tu objetivo es responder amablemente, con un tono elegante, profesional y conciso en español.
      Información de Vanguardia:
      - Servicios: Estrategia y Planificación, Diseño y Dirección de Arte, Producción y Logística, Fotografía de Interiores, Diseño Web Premium, Producción Audiovisual.
      - Herramientas: Generador de Moodboards Conceptuales y Estrategia Inteligente de Marketing.
      - Si el usuario desea contratar un servicio o agendar una consulta, invítalo a usar el botón 'Agendar Cita' o visitar la sección de Contacto.
      Responde en máximo 2-3 párrafos breves de manera cálida y directa.`;

      // Build chat contents including basic history
      const formattedContents: any[] = [];
      if (Array.isArray(history)) {
        for (const h of history.slice(-6)) {
          formattedContents.push({
            role: h.sender === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }]
          });
        }
      }
      formattedContents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "Gracias por comunicarte con Vanguardia. Un especialista se pondrá en contacto pronto si necesitas asistencia personalizada.";
      res.json({ reply: replyText });
    } catch (error) {
      console.error("Error en chat IA:", error);
      res.json({ reply: "Gracias por escribirnos. Estamos analizando tu consulta. Si deseas una atención inmediata, puedes dejarnos tu correo en nuestro formulario de Contacto o agendar una cita." });
    }
  });

  // AI Route: Moodboard Generator
  app.post("/api/ai/moodboard", async (req, res) => {
    try {
      const { projectDetails } = req.body;
      if (!projectDetails) {
        return res.status(400).json({ error: "Detalles del proyecto requeridos" });
      }

      const prompt = `Como diseñador de interiores senior para estudios de lujo y arquitectura, crea un concepto de moodboard basado en los siguientes detalles del proyecto: "${projectDetails}". 
      Devuelve la respuesta en formato JSON estricto en español con la siguiente estructura:
      {
        "theme": "Nombre del tema o concepto",
        "colorPalette": ["#hex1", "#hex2", "#hex3", "#hex4", "#hex5"],
        "materials": ["Material 1", "Material 2", "Material 3", "Material 4", "Material 5"],
        "furnitureStyle": "Descripción detallada del estilo de mobiliario",
        "keywords": ["PalabraClave1", "PalabraClave2", "PalabraClave3", "PalabraClave4", "PalabraClave5"]
      }
      Solo devuelve JSON válido.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      
      const data = JSON.parse(response.text || "{}");
      res.json(data);
    } catch (error) {
      console.error("Error en moodboard IA:", error);
      res.status(500).json({ 
        error: "Failed to generate moodboard",
        theme: "Minimalismo Orgánico",
        colorPalette: ["#f4f1eb", "#e0d8cc", "#8c7e6a", "#4a4a4a", "#2c2c2c"],
        furnitureStyle: "Piezas de líneas limpias, maderas claras, textiles naturales como lino y algodón, y acentos en piedra o cerámica mate.",
        materials: ["Madera de roble lavado", "Piedra caliza", "Lino crudo", "Microcemento", "Acero ennegrecido"],
        keywords: ["Orgánico", "Sereno", "Atemporal", "Táctil", "Luminoso"]
      });
    }
  });

  // AI Route: Marketing Strategy
  app.post("/api/ai/strategy", async (req, res) => {
    try {
      const { businessType, goals } = req.body;
      if (!businessType || !goals) {
        return res.status(400).json({ error: "Tipo de negocio y objetivos requeridos" });
      }

      const prompt = `Actúa como estratega senior de marketing digital especializado en marcas de arquitectura e interiorismo. 
      Crea una estrategia de marketing estratégica para un cliente con tipo de negocio: "${businessType}" y objetivos: "${goals}".
      Devuelve la respuesta en formato JSON estricto en español con esta estructura:
      {
        "targetAudience": "Descripción de la audiencia objetivo ideal",
        "coreMessage": "Mensaje central y posicionamiento de marca",
        "channels": ["Canal 1", "Canal 2", "Canal 3", "Canal 4"],
        "tactics": ["Táctica accionable 1", "Táctica accionable 2", "Táctica accionable 3", "Táctica accionable 4"]
      }
      Solo devuelve JSON válido.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      
      const data = JSON.parse(response.text || "{}");
      res.json(data);
    } catch (error) {
      console.error("Error en estrategia IA:", error);
      res.status(500).json({ 
        error: "Failed to generate strategy",
        targetAudience: "Profesionales y propietarios de alto poder adquisitivo que valoran el diseño exclusivo y la arquitectura de autor.",
        coreMessage: "Transformamos espacios en refugios atemporales combinando funcionalidad, estética y elegancia silenciosa.",
        channels: ["Instagram (Reels de proceso)", "Pinterest (SEO visual)", "LinkedIn (Networking B2B)", "Publicaciones especializadas"],
        tactics: [
          "Serie audiovisual de procesos de diseño y selección de materiales.",
          "Lead magnet en PDF con dossier de tendencias de arquitectura.",
          "Campañas orientadas a palabras clave de diseño de lujo.",
          "Estrategia de PR en revistas digitales especializadas."
        ]
      });
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
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
