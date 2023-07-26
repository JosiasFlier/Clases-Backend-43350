import express from 'express'



const app = express()
app.use(express.json()) // es para cuando usamos req.body

app.listen(8080, () => console.log('Server App'))

// endpoints
app.get('/', (req, res) => res.status(200).json({mensaje: 'OK'}))
app.get('/health', (req, res) => res.status(200).json({mensaje: 'The server is runing'}))


