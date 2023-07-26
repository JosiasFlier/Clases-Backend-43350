const socket = io()

// apreton de manos, en el servidor ( app ) se llama io
// y en el cliente lo llamo socket ( index.js )

let chatBox = document.getElementById('chatBox')
chatBox.addEventListener('keyup', evt => {
    // console.log(evt.key)
    
    if (evt.key === 'Enter') {
        socket.emit('message', chatBox.value)
    }
})


socket.on('history', data => {
    // console.log(data)
    let history = document.getElementById('history')
    let messages = ''
    data.forEach(message => {
        messages += `${message.id} dice: ${message.message} <br/>`
    })
    history.innerHTML = messages
    chatBox.value = ''
})