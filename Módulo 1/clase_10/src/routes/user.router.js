// PRUEBA DE LA CLASE - DESPUES ELIMINAR

import { Router } from "express"


const users = [
    { id: 1, name: "Josias", role: 'professor' },
    { id: 2, name: "Romina", role: 'professor' },
    { id: 3, name: "Adrian", role: 'student' },
    { id: 4, name: "Emmanuel", role: 'student' },
]; 


const foods = [
    { id: 1, name: "Banana"},
    { id: 2, name: "Manzana"},
    { id: 3, name: "Naranja"},
    { id: 4, name: "Pomelo"},
]; 

const router = Router()

router.get('/', (req, res) => {
    res.render('showUsers', { users })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const user = users.find ((item) => item.id == id)
    res.render('showUser', {
        user,
        isProfessor: user.role == 'professor' ? true : false,
        foods
    })
})

export default router