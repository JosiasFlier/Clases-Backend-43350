import express from 'express'
import userRouter from './routes/user.router.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json()); //Para que lea los datos en JSON


app.use('/users', userRouter)


try {
    await mongoose.connect('mongodb+srv://coder:coder@cluster0.yzrj37s.mongodb.net/clase14')
    app.listen(8080, () => console.log('Server Up!!'))
} catch(err) {
    console.log(err.message)
}