import express, { request } from 'express'

const app = express()

const cursos = [
    {id: 1, name: 'Backend', precio: 12000},
    {id: 2, name: 'React', precio: 15000},
    {id: 3, name: 'Desarrollo web', precio: 9000},
    {id: 4, name: 'Javascript', precio: 10000}
]

const user = [
    {name: 'Josias', edad: 29, Nacionalidad: 'Argentino'}
]

const users = [
    {id: 1, name: "Josias", age: 29},
    {id: 2, name: "Romina", age: 27},
    {id: 3, name: "Emmanuel", age: 40},
    {id: 4, name: "Jemima", age: 37},
]


//IMPLEMENTACION DE RUTA RAIZ
app.get('/', (request, response) => {
    response.send('<h1>Hola Mundo!!!</h1>')
})

//IMPLEMENTACION DE RUTA CURSOS
// app.get('/cursos', (request, response) => {
//     response.send({cursos})
// })

// BUSQUEDA DE CURSOS INDIVIDUALES CON QUERY PARAMS
app.get('/cursos/:id', (request, response) => {
    const id = request.params.id
    const curso = cursos.find (item => item.id == id)
    if (!curso) return response.send({Error: "El curso no existe"})
    response.send(curso)
})

// HAGO UN LIMIT CON QUERY
app.get('/cursos', (request, response) => {
    const limit = request.query.limit
    if (!limit) {
        response.send({cursos})
    } else {
        let productLimit = cursos.slice(0, limit)
        response.send(productLimit)
    }
})


//IMPLEMENTACION DE RUTA USER
app.get('/user', (request, response) => {
    response.send({user})
})

// RUTA USERS - CON REQUEST QUERY (REQ.QUERY)

app.get('/users', (request, response) => {
    const id = request.query.id
    if (!id){
        response.send({users})//Si no existe el id , respondo todos
    } else {
        const user = users.find (item => item.id == id)
        if (!user) return response.send({Error: "El usuario no existe"})
        response.send(user)   
    }
})






app.listen(8080, () => {
    console.log('Server App')
})