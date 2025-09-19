import express from 'express'

const app = express()

const PORT = 3000

app.get('/api/note',(req,res)=>{
    res.status(200).json({api:"note"})
})

app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})
