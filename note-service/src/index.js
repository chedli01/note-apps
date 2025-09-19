import express from 'express'
import configureRoutes from './routes/index.js'

const app = express()

const PORT = 3000

configureRoutes(app)
// app.get('/api/note',(req,res)=>{
//     res.status(200).json({api:"note"})
// })

app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})
