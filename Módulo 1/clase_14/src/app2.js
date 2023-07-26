import express from 'express'
import { userRouter1 } from './routes/userr.router'
import mongoose from 'mongoose'

const app = express()
app.use(express.json()) //leer datos JSON

// routes
app.get('/users', userRouter1)


try{
    await mongoose.connect('mongodb+srv://coder:coder@cluster0.yzrj37s.mongodb.net/clase14')
    app.listen(8080, () => console.log('Server upp!!'))
} catch (err) {
    console.log(err.message)
}

