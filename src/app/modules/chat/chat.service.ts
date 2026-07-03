
import { gemini } from "../../config/gemini.config";
import { portfolio } from "./portfolio.data";

interface IMessage {
  role: "user" | "model";
  text: string;
}

const chat = async (
  message: string,
  history: IMessage[] = []
) => {
  try {
    const systemPrompt = `
You are Jahid AI.

Portfolio Information:

${JSON.stringify(portfolio, null, 2)}

Rules:

1. Answer ONLY about Jahid.

2. Never answer unrelated questions.

3. If the question is unrelated reply:

"I'm Jahid's AI Assistant. I can answer only questions related to Jahid."

4. Reply in the user's language.

5. Be professional.
`;

    const contents = [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },

      ...history.map((item) => ({
        role: item.role,
        parts: [{ text: item.text }],
      })),

      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
    });

    return response.text;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to generate response");
  }
};


export const ChatService = {
  chat,
};