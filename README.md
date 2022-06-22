# Cómo construí mi BlockChain


Esta es la estructura inicial-mental de Carlos A Peña Montenegro  sobre lo que entiendo hasta el momento de los blockchain

A continuación presento una serie de reglas y un seudocodigo guíado por el entendimiento que tengo hasta el momento de lo que hemos estudiado hasta el día de hoy en el curso de BlockChain de Universidad de Antioquia, en el semestre 22-1.

Suepuestos 1, generamos un banco central inicial de la moneda(sabemos que no es real y que el objeto es desaparecerlo):
*Debería existir un banco de datos (central por el momento) que almacene toda la información de los usuarios, transferencias y cantidades generales,...
*Condición importante: Debe existir una cantidad inicial de moneda emitida
*Condición importante: Deebe haber un limite del uso de esas monedas
*Condición importante: Para poder generar pruebas, he de generar unos usuarios random para poder generar la interacción con sus respectivas transferencias
*Condición importante: la información general de los usuarios ha de estar siempre actualizada en el banco general y en cada usuario

Supuestos 2, generamos los usuarios, sus relaciones con las monedas y las transacciones:
*¿Es posible que todos los usuarios contengan la información general de la cantidad de moneda límite y la verificación que las monedas circulando cumplen con la condición que esa cantidad no sea modificable?/ Pregunta personal de Carlos APM
* ¿El Ledger o libro de registros funciona como un banco central o solo como un libro de todos los registros?)
* ¿Cada usuario cuenta con un ledger para sí mismo? ¿Hay un ledger universal para toda la red?
*Cada usuario se identifica con una identidad pública que puede ser un seudonimo
*Sabemos que el banco de datos no va a ser central pues la información se distribuirá en toda la red p2p
*Cada usuario tiene metadatos de la cantidad de moneda que tiene y de la información historica de transferencias
*Entre bloques se usan claves asimétricas, esto quiere decir que entre un bloque A y otro B cada una tiene una clave publica y privada que solo permite guiar información entre un bloque y otro o enviar información de la misma desde cualquier bloque solo con las claves privadas

Supuesto 3, definiendo la codificación del hash:
*Por fines didacticos para este curso definimos que el hash será codificado por medio de SH256, asi que utilizaremos la librería que logre esos hash

Supuesto 4 (revisión del arbol de merkle), revisamos que sea posible acceder a la información del arbol de merkle que contiene los hashes:

Revisión de un ejemplo: este es un arbol de merkle que es binario y está balanceado, este arbol tiene una cantidad de transferencias que con el hash se puede conocer su procedencia, lo más sencillo de hacer en este caso es concatenar hashes
H1234=Hash(H12H34)
H12=Hash(H1H2)*H34(H3H4)
H1=Hash(T1)*H2=Hash(T2)**H3=Hash(T3)*H4=Hash(T4)
Transacción1*Transacción2**Transacción3*Transacción4

Tomado de https://www.mincotur.gob.es/Publicaciones/Publicacionesperiodicas/EconomiaIndustrial/RevistaEconomiaIndustrial/405/DOLADER,%20BEL%20Y%20MU%C3%91OZ.pdf

Supuestos 5, generando la prueba de trabajo:
*Se debe buscar un nuevo bloque añadiendo a la información de transacción un nonce
*Se debe tener en cuenta el número de bloques alcanzados.
*Lo anterior determina la dificultad para encontrar el siguiente bloque, para efecto practico la dificultad la llevaremos hasta encontrar dos ceros en el hash.

Supuesto 6, pensar en el concenso:
*Una copia del ledger completo puede ser enviada a cualquier persona en la red
*El concenso se logra cuando 50% +1 


clase o vector superLedger{
/Esto es como un banco universal de nuestro bitcoin que contiene toda la información 
/ Pensemos en esta clase o vector como el emisor inicial de todas las monedas habidas y por haber de bitcoins
/ Almacenamos a los posibles usuarios que daran cuenta de la cantidad total que tienen entre ellos para confirmar que los valores son reales
/ Se debe permitir agregar nuevos usuarios creados en el transcurso del uso de transeferencias
}

clase moneda	{
		//Tambien le podemos llamar la clase bloque
		ClavePublica
		ClavePrivada
		Información o datos que contiene esta transferencia
		CantidadTransferida
		FeePorTransferencia

}

constructor de clase usuario{

clase transferencia	{
 		   	cantidad transferida
			banderaSaleEntra boolean //0 si sale, 1 si entra sale
			si la transferencia sale, otorga un fee al emisor.
			reglas de revisión de disponibilidad en la cartera del usuario, si es de salida, verifica disponibilidad la wallet
		   	}

Clase wallet 	{
		//contiene la informaciòn de la cantidad que dispone y solo se completa su transferencia o modificación cuando la moneda destino ha llegado correctamente a su destinatario, de A a B. 
		//Cuando la información haya concluido su curso, ahí podrá restarse de A la cantidad y sumarse a B
		//Como determinar que si llegó a B? solo podría hacerse con las claves publicas y privadas del nodo destino y origen, sin embargo es sabido que en temas de seguridad informatica es posible que algun nodo intermedio escuche las transacciones y les envie información equivocada a los nodos A y B (debo leer un poco más de esto).
		}
	
			}


clase hash 	{
		//se podría crear una forma de generarnuevos hashes a partir de algoritmos complejos que generen números primos muy 		grandes que sirvan como claves asimetricas publicas y privadas para que la dificultad de encontrarlos sea muy alta o 		utilizar para estos efectos académicos librerias que los generen
		//el hash actual debe contener o permitir extraer el arbol de merkle

		clase arbolMerkle	{
					/permite construir el arbol de merkle y poder extraer informaciòn de el
					}

		}

clase nodo	{
		//Esta clase sirve para minar, los nodos pueden denominarse nodos mineros
		//La mineria de esta clase consiste en encontrar el siguiente hash según se haya establecido en las reglas de la prueba trabajo		
		}


Clase nonce	{
		//Es un número random que al codificar todo el mensaje con el número arroja un nuevo hash y solo se detiene cuando el hash encontrado cumpla con la dificultad de lo que lleve el bloque.
		}


Clase pruebaTrabajo	{
			//espera que el bloque de trabajo sea aceptado por una red determinada segun reglas especificas de porcentaje de concenso
			//obtiene recompensa (todos los nodos que encontraron el hash obtienen el mismo fee?)
			//dificultad recomendada que se genere un bloque cada 10 minutos
			//cada 16 bloques aumenta la dificultad
			}


**FUTURAS ENTREGAS ETHEREUM

clase gas{}
clase oraculo{} /smartcontract que permite información externa fuera del sistema, esto podría consultar el precio del dolar


la info de santiago andres montoya

https://www.udemy.com/course/web3-blockchain-smartcontracts-crypto-practice-tests/?deal_code=&utm_source=aff-campaign&utm_medium=udemyads&utm_term=Homepage&utm_content=Textlink&utm_campaign=Admitad-default&admitad_uid=dbd94df58d4d13efe5acb2ac5f852eac&publisher_id=1720787&website_id=1959448&couponCode=JUNE02
