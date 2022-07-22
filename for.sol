//SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

contract Change{

    uint8[10] numeros;

    constructor(){
        numeros=[2,4,6,8,10,1,3,5,7,9];

    }

    function forTest() public view returns(uint8){
        uint8 suma;
        for (uint8 i=0; i<=numeros.length-1;i++){
            suma=suma+numeros[i];

        }
        return suma;

    }

}
