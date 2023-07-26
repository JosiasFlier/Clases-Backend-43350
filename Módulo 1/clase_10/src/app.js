import  express, { urlencoded } from "express";
import productsRouter from "./routes/products.router.js"
import cartRouter from "./routes/cart.router.js"
import userRouter from "./routes/user.router.js"

import handlebars from 'express-handlebars'
import { Server } from 'socket.io'


const app = express()
app.use(express.json()); //Para que lea los datos en JSON
app.use(urlencoded({ extended: true }));


const PORT = 8080;


// PRUEBA DE CHAT

const log = []

// Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')



//RUTA RAIZ "localhost:8080"
app.use(express.static('./src/public'))
app.get('/healt', (req, res) => res.send('<h1>OK!</h1>'))


// endpoints con router

// Ruta principal
app.get("/", (req, res) => res.render("index", {name:"JOSIAS"}))
app.use('/api/products', productsRouter)
app.use('/api/carts', cartRouter)
app.use('/api/users', userRouter)

// Practicando handlebars

app.get('/ejemplo', (req, res) => {
    res.render('ejemplo', { //se renderiza el HB que tenga el nombre ejemplo.handlebars
        nombre_vista: 'Ejemplo de handlebars'// vista dinamica en el title del main 
    })
})

app.get('/motor', (req, res) => res.render('motor')) 



const serverHttp = app.listen(PORT, () => console.log('Server Up'))
const io = new Server(serverHttp)


// 'connection' palabra reservada, es un evento, para detectar 
// cuando se realiza una coneccion con el cliente
// Programacion orientada a eventos
io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado!!')
    socket.on('message', data => {
        log.push({id: socket.id, message: data})
        io.emit('history', log)
    })
})

