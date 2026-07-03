import { GoogleGenAI } from "@google/genai";
import { envVars } from "./env";


export const gemini = new GoogleGenAI({
  apiKey: envVars.API_KEY,
});