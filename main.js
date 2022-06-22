//npm install crypto-js--save

const SHA256=require('crypto-js/sha256')

class bloque{
	constructor(indice,dato,hashAnterior='') {
	this.indice=indice;
	this.fecha=new Date();
	this.dato=dato;
	this.hashAnterior=hashAnterior
	this.hash=this.crearHash();
	this.nonce=0;
	}
	
	crearHash(){
	return SHA256(this.index + this.fecha + this.dato+this.hashAnterior+this.nonce).toString();
	}
	
	minar(dificultad){
			while (!this.hash.startsWith(dificultad)) 	{
									//Mientras no se empiece por ña dificultad propuesta, no inicia
									this.nonce++;
									this.hash=this.crearHash;
									}
				
			}
}

class blockChain	{
	constructor(genesis,  dificultad='0')	{
		
				this.cadena=[this.crearPrimerBloque(genesis)];
				this.dificultad=dificultad;
				}
		crearPrimerBloque(genesis)	{
						return new bloque(0,genesis);
						}
		getUltimoBloque()	{
					return this.cadena[this.cadena.length-1];
					}
		addBloque(dato)	{
				let antBloque = this.getUltimoBloque();
				let bloque= new bloque(antBloque.index+1), dato, anteBloque.hash);
				bloque.minar(this.dificultad);
				console.log('El bloque se ha minado con éxito'+bloque.hash+' con nonce'+bloque.nonce);
				this.cadena.push(bloque);
				
				}

				}

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
