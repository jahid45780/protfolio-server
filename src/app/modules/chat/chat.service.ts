
import { gemini } from "../../config/gemini.config";
import { portfolioData } from "./portfolio.data";

const chat = async (message: string) => {
  try {
    const prompt = `
${portfolioData}

========================================

User Question:
${message}

========================================

Instructions:

- Answer only from the portfolio information above.
- If the question is unrelated, politely say:
"I'm Jahid's AI assistant. I can only answer questions about Jahid's portfolio."
- Keep the answer professional.
- Reply in the same language as the user's question.
`;

    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error(error);

    throw new Error("Failed to generate AI response");
  }
};

export const ChatService = {
  chat,
};