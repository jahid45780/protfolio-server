import { Router } from "express";
import { chatRouter } from "../modules/chat/chat.route";


export const router = Router()

const modulesRouter = [
    {
        path:"/chat",
        route:chatRouter
    }
]

 modulesRouter.forEach((route)=>{
    router.use(route.path, route.route)
 })


