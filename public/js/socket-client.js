
//Referecias del TML
const lblOnline=document.querySelector('#lblOnline');
const lblOffline=document.querySelector('#lblOffline');
const txtMensaje=document.querySelector('#txtMensaje');
const btnEnviar=document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect',()=>{
    lblOffline.style.display='none';
    lblOnline.style.display='';
    //console.log('Conectado')
});

socket.on('disconnect',()=>{
    lblOffline.style.display='';
    lblOnline.style.display='none';
    //console.log('Desconectado')
});

socket.on('enviar-mensaje',(payload)=>{
    console.log('enviar-mensaje:' + payload.mensaje)
});

btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value;
    //console.log(mensaje);
    const payload = {
        mensaje,
        id:'123ABC',
        fecha:new Date().getTime()

    }
    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log('desde el server ',id)
    });
});