import {Router} from 'express'

const router = Router()


router.get('/', (req, res) => res.status(200).json({mensaje: 'Aqui va la lista de usuarios'}))

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json({mensaje: `Aqui van los detalles del usuario con id = ${id}`})
})

export default router