import express from 'express'

const app = express()

const PORT = 3000

app.get('/api/user',(req,res)=>{
    res.status(200).json({api:"user"})
})

app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})
