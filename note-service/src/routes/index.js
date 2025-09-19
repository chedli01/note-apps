import notesRouter from "./notesRouter.js"

export default function  configureRoutes (app){
    app.use('/api/notes',notesRouter)

}