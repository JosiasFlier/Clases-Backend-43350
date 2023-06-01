import express from "express";

let users = [
    { id: 1, name: "Josias", age: 29 },
    { id: 2, name: "Romina", age: 26 },
    { id: 3, name: "Adrian", age: 31 },
    { id: 4, name: "Emmanuel", age: 40 },
];

const app = express();
app.use(express.json()); // es para cuando usamos req.body

// METODO GET
app.get("/", (req, res) => res.status(200).json({ mensaje: "OK" }));

app.get("/users", (req, res) => {
    res.status(200).json({ users });
});

// METODO POST

// Funciona, pero es mala practica en POST usar req.query
// app.post('/users', (req, res) => {
//     const {id, name, age} = req.query
//     if (!id || !name || !age){
//         return res.status(400).json({Error: 'Faltan Datos'})
//     }
//     const userCreated = {id: parseInt(id), name, age: parseInt(age)}
//     users.push(userCreated)
//     res.status(201).json({Mensaje: "Usuario Creado", data: userCreated })
// })

app.post("/users", (req, res) => {
    const { id, name, age } = req.body;
    if (!id || !name || !age) {
        return res.status(400).json({ Error: "Faltan datos" });
    }
    const userCreated = { id, name, age };
    users.push(userCreated);
    res.status(201).json({
        Mensaje: "Usuario creado con exito",
        data: userCreated,
    });
});

// METODO PUT

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    const userIndex = users.findIndex((item) => item.id == id);

    if (userIndex !== -1) {
        users[userIndex] = {
            ...users[userIndex],
            ...newData,
        };
        res.status(200).json({ mensaje: 'Usuario actualizado' });
    } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
});

// METODO DELETED
// app.delete("/users/:id", (req, res) => {
//     const id = req.params.id;
//     users = users.filter((item) => item.id != id);
//     res.status(200).json({ Mensaje: "Usuario eliminado" });
// });

// deleted con splice
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const index = users.findIndex((item) => item.id == id);
    if (index !== -1) {
        users.splice(index, 1);
        res.status(200).json({ mensaje: "Usuario eliminado" });
    } else {
        res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
});



app.listen(8080, () => console.log("Server App"));
