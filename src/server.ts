import { Server } from "http";
import { envVers } from "./app/config/env";
import mongoose from "mongoose";
import app from "./app";


let server: Server

const startServer = async () => {
    try {
        console.log(envVers.NODE_ENV)
        await mongoose.connect(envVers.DB_URL)
        console.log("contend to DB!!");

        server = app.listen(envVers.PORT,()=>{
            console.log(`server is  running on port ${envVers.PORT}`)
        })

    } catch (error) {
        console.error("Error starting server:", error);
    }
}

 (async ()=>{
    await startServer()
 })()

 process.on("SIGINT",()=>{
     console.log("SIGINT detected ... server shutting down",);

     if(server){
        server.close(()=>{
             process.exit(1)
        })
        process.exit(1)
     }
})

process.on("unhandledRejection",(err)=>{
     console.log("UnhandledRejection detected ... server shutting down", err);

     if(server){
        server.close(()=>{
             process.exit(1)
        })
        process.exit(1)
     }
})


process.on("uncaughtException",(err)=>{
     console.log("UncaughtException detected ... server shutting down", err);

     if(server){
        server.close(()=>{
             process.exit(1)
        })
        process.exit(1)
     }
})


