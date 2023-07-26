import { Router } from "express"
import ProductManager from "../controllers/productManager.js";

const router = Router();

const productManager = new ProductManager()

router.get("/", async (req, res) => {
    const books = await productManager.getProducts()
    try {
    res.render("home", { books });
    } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
    }
});

router.get("/realTimeProducts", async (req, res) => {
    const books = await productManager.getProducts()
    try {
    res.render("realTimeProducts", { books });
    } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
    }
});

export default router;