//npm install crypto-js--save

const SHA256=require('crypto-js/sha256')

class bloque{
	constructor(indice,dato,hashAnterior='') {
	this.indice=indice;
	this.fecha=new Date();
	this.dato=dato;
	this.hashAnterior=hashAnterior
	this.hash=this.crearHash;
	}
	
	crearHash(){
	return SHA256(this.index + this.fecha + this.dato).toString();
	}
}

class blockChain	{
	constructor(genesis)	{
				this.cadena=[this.crearPrimerBloque(genesis)];
				}
	crearPrimerBloque(genesis)	{
					return new bloque(0,genesis);
					}
	getUltimoBloque()	{
				return this.cadena[this.cadena.length-1];
				}
	addBloque(dato)	{
			let antBloque = this.getUltimoBloque();
			let block= new bloque(antBloque.index+1), dato, anteBloque.hash);
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

