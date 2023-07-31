import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars"
import viewsRouter from "./routers/views.router.js"

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')


app.use('/', viewsRouter)

const uri = 'mongodb://127.0.0.1:27017'
const PORT = 8080

try{
    mongoose.connect(uri, { dbName: 'Clase_17'})
    app.listen(PORT, () => console.log(`Server up in PORT ${PORT}`))
} catch (err) {
    console.log(err.message)
}