import http from 'http'

const server = http.createServer((request, response) => {
    console.log ('Alguien me hizo una peticion')
    response.end ('Solicitud recibida.... Toma, aqui tines tu respuesta')
})

const connectedServer = server.listen(8080, () => {
    console.log('Server Up...')
})