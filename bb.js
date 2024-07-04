setTimeout(cambiaMensaje,2300)

function cambiaMensaje() {
    document.getElementById("loading-message").innerText="Enviado!"
}

setTimeout(function() { 
    alert("Recibiste un abrazo!")
}, 2400)
