import express from 'express'



const app = express()
app.use(express.json()) // es para cuando usamos req.body

app.listen(8080, () => console.log('Server App'))

// endpoints
app.get('/', (req, res) => res.status(200).json({mensaje: 'OK'}))
app.get('/health', (req, res) => res.status(200).json({mensaje: 'The server is runing'}))




// let users = [
//     {id: 1, name: 'Josias', age: 29},
//     {id: 2, name: 'Romina', age: 26},
//     {id: 3, name: 'Adrian', age: 31},
//     {id: 4, name: 'Emmanuel', age: 40}
// ]


// app.get('/users', (req, res) => {
//     res.status(200).json({users})
// })

// app.post('/users', (req, res) => {
//     const {id, name, age} = req.query
//     if (!id || !name || !age){
//         return res.status(400).json({Error: 'Faltan Datos'})
//     }
//     const userCreated = {id: parseInt(id), name, age: parseInt(age)}
//     users.push(userCreated)
//     res.status(201).json({Mensaje: "Usuario Creado", data: userCreated })
// })

// // metodo deleted
// app.delete('/users/:id', (req, res) => {
//     const id = req.params.id
//     users = users.filter(item => item.id != id)
//     res.status(200).json({ Mensaje: 'Usuario eliminado'})
// })

// // metodo put

// app.put('/users/:id', (req, res) => {
//     const id = req.params.id
//     const newData = req.body
//     const user = user.find (item => item.id == id)
//     user = {
//         ...user,
//         ...newData
//     }
// })


