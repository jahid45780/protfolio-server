import { Router } from "express";
import { ChatController } from "./chat.controller";

const router = Router();

router.post('/chat-ask', ChatController.chat )

export const chatRouter = router;