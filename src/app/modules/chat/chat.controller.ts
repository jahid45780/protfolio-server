import { NextFunction, Request, Response } from "express";
import { ChatService } from "./chat.service";
import { catchAsync } from "../../utils/catchAsync";
import { sentResponse } from "../../utils/sentResponse";


const chat = catchAsync(async (req:Request, res:Response, next:NextFunction)=>{

   const { message, history = [] } = req.body;

    const reply = await ChatService.chat(message, history);

       sentResponse(res,{
        statusCode: 201,
        success: true,
        message: "AI response generated successfully",
        data: reply
    })

})

export const ChatController = {
  chat,
};