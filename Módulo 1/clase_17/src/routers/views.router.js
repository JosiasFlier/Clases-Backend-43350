import { Router } from "express";
import UserModel from "../models/user.model.js";

const router = Router()

router.get('/', (req, res) => res.render('index'))

router.get('/users', async (req, res) => {
    let limit = parseInt(req.query.limit) || 5
    let page = parseInt(req.query.page) || 1
    const result = await UserModel.paginate({}, {page, limit, lean: true})

    result.prevLink = result.hasPrevPage 
                ? `/users?limit=${limit}&page=${result.prevPage}`
                : ''
    result.nextLink = result.hasNextPage 
                ? `/users?limit=${limit}&page=${result.nextPage}`
                : ''


    res.render('users', result)
})

//"lean" convierte los datos de mongo en un objeto para que se pueda leer


export default router