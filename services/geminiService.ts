
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askEducationalAI(query: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are an AI assistant for ThinkersLabe, a company focused on consumer science and education products. Keep your answers scientific, educational, encouraging, and easy to understand for a general audience. Do not use overly complex jargon unless you explain it.",
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't process that query. Please try asking about physics, biology, or general learning!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The thinking engines are a bit busy. Please try again in a moment!";
  }
}
