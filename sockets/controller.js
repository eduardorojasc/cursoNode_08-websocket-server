const socketController=socket => {

    console.log('cliente conectado',socket.id);
    
    socket.on('disconnect',()=>{
        console.log('cliente desconectado');
    });

    socket.on('enviar-mensaje',(payload,callback)=>{

        //console.log(payload);
        
        const id = 123456;
        callback({id, fecha: new Date().getTime()});


        socket.broadcast.emit('enviar-mensaje',payload);

    })
}

module.exports={
    socketController
}