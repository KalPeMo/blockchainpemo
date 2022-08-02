const SHA256 = require('crypto-js/sha256');

class Bloque {
    constructor(indice, dato, hashAnterior = ''){
        this.indice = indice;
        this.fecha = new Date();
        this.dato = dato;
        this.hashAnterior = hashAnterior;
        this.hash = this.crearHash();
        this.nonce = 0;
    }

    crearHash() {
        return SHA256(this.indice + this.fecha + this.dato + this.hashAnterior + this.nonce).toString();
    }

    mine(dificultad) {
        while(!this.hash.startsWith(dificultad)) {
            //Mientras no se empiece por la dificultad propuesta, no inicia, es lo que deberìa ser
            this.nonce++;
            this.hash = this.crearHash();
        }
    }
}

class BlockChain {
    constructor(genesis, dificultad = '00'){
        this.cadena = [this.crearPrimerBloque(genesis)]; 
        this.dificultad =dificultad ;
    }
    crearPrimerBloque(genesis){
        return new Bloque(0,genesis);
    }
    getUltimoBloque() {
        return this.cadena[this.cadena.length-1];
    }
    addBloque(dato){
        let bloqueAnterior= this.getUltimoBloque();
        let bloque = new Bloque(bloqueAnterior.indice+1, dato, bloqueAnterior.hash);
        bloque.mine(this.dificultad);
        console.log('El bloque se ha minado con éxito '+bloque.hash+' con un nonce de '+bloque.nonce);
        this.cadena.push(bloque);
    }
    isValid() {
        for(let i=1; i < this.cadena.length; i++){
            let bloqueAnterior = this.cadena[i-1];
            let bloqueActual = this.cadena[i];

            if(bloqueActual.hashAnterior != bloqueAnterior.hash)
                return false;
            
            if(bloqueActual.crearHash() != bloqueActual.hash)
                return false;
        }
        return true;
    }
}


let miMoneda = new BlockChain('Información de genesis','00');
//modificar aqui el valor maximo del step para obtener la cantidad de bloque deseada
for (let step = 0; step < 5; step++) {
    miMoneda.addBloque('En la cadena este es el bloque # '+step);
    }
console.log(JSON.stringify(miMoneda.cadena,null,2));


//Prueba 1
//block = new bloque(0,'prueba1')
//console.log(JSON.stringify(block,null,2));

//Prueba 2
//let nuevaMoneda=new blockChain('información del bloque genesis')
//console.log(JSON.stringify(nuevaMoneda.cadena,null,2));
//nuevaMoneda.addBloque('transacción 1 transfieiendo 678 pesitos colombianos')
//nuevaMoneda.addBloque('transacción 2 transfiriendo USD 5000 pesitos colombianos')

//Prueba 3 
//let nuevaMoneda=new blockChain('información del bloque genesis','0');

//Referencias bibliográficas, por el momento la construcción de este código en javascript esta estreechamente asociado con la axplicación que se da ee https://www.youtube.com/watch?v=3YFVHAkdVQM y siguientes links.
