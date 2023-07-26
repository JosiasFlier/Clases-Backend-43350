import { Router } from "express";
import { userModel } from "../models/user.model";

const router1 = Router()

router1.get('/', async (req, res) => {
    try{
        const users = await userModel.find()
        res.status(200).json({ status: 'success', payload: users })
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message })
    }
})

router1.post('/', async (req, res) => {
    try {
        const user = req.body
        const result = await userModel.create(user)
        res.status(200).json({ status: 'success', payload : result })
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message })
    }
})

export default router1