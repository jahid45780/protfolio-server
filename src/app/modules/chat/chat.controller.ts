import { Request, Response } from "express";
import { ChatService } from "./chat.service";

const chat = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    const reply = await ChatService.chat(message);

    res.status(200).json({
      success: true,
      message: "AI response generated successfully",
      data: {
        reply,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const ChatController = {
  chat,
};