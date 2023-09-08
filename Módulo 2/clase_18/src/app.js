// Importación de módulos necesarios
import express from "express";              // Importa el framework Express.js
import cookieParser from "cookie-parser";     // Importa el middleware para parsear cookies
import session from "express-session";        // Importa el middleware para gestionar sesiones

// Creación de una instancia de la aplicación Express
const app = express();

// Configuración de la sesión
app.use(session({
    secret: 'secret',             // Clave secreta para firmar las cookies de sesión
    resave: true,                 // Forzar el almacenamiento de sesiones, incluso si no han cambiado
    saveUninitialized: true       // Guardar sesiones no inicializadas (necesario para autenticación)
}))

// Ruta principal de la aplicación
app.get('/', (req, res) => res.json({ status: 'success', message: '¡Que la fuerza te acompañe!' }));

// Ruta para crear un usuario y establecer una sesión
app.get('/user/create', (req, res) => {
    const user = {
        username: 'jaf973',
        ui_preference: 'dark',
        language: 'es',
        location: 'ar'
    }

    req.session.user = user;   // Establece la información del usuario en la sesión
    res.json({ status: 'success', message: 'Sesión creada' });
})

// Ruta para leer la información del usuario desde la sesión
app.get('/user/read', (req, res) => {
    // Verificar si la sesión existe antes de acceder a la propiedad 'username'
    if (req.session && req.session.user) {
        res.send(req.session.user.username);
    } else {
        res.status(401).json({ status: 'error', message: 'La sesión no está establecida' });
    }
});

// Ruta para eliminar la sesión del usuario
app.get('/user/delete', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.json({ status: 'error', message: 'Ocurrió un error al eliminar la sesión' });
        }
        return res.json({ status: 'success', message: 'Sesión eliminada exitosamente' });
    })
});

// Iniciar el servidor y escuchar en el puerto 8080
app.listen(8080, () => console.log('Servidor en funcionamiento en el puerto 8080'));



// TODO VIEJO, CUANSO SE USABA SOLO COOKIES
// app.use(cookieParser('secret'))

// app.get('/', (req, res) => res.json ({status: 'success', message: 'que la fuerza te acompañe'}))

// app.get('/user/create', (req, res) => {
//     const user = {
//         username: 'jaf973',
//         ui_preference: 'dark',
//         laguage: 'es',
//         location: 'ar'
//     }
//     res.cookie('preference', JSON.stringify(user), {signed: true}).json({ status: 'success', message: 'Cokkie creada'})
// })

// app.get('/user/read', (req, res) => {
//     const preference = JSON.parse(req.signedCookies['preference'])
//     res.send(preference.username)
// })


// app.get('/user/delete', (req, res) => {
//     res.clearCookie('preference').json({ status: 'Success', messagge: 'Cookie deleteada'})
// })