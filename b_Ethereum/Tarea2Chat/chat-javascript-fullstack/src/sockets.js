var n=0;
const connections=[];
module.exports=function(io){
    io.on('connection',(socket)=> {
        connections.push(socket);
        console.log('Listener: se conectó un nuevo usuario, entrada #'+n);
    
        socket.on("disconnect",()=>{
            connections.splice(connections.indexOf(socket),1);
            console.log("Now %s sockets is connected",connections.length);
        });
    });
}
