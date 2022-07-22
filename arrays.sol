//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Arrays{
    //uint public number = type (uint64).max;
    uint8[5] public numeros;

    function setDatat () public{
        numeros[0]=21;
        numeros[1]=14;


    } 

    function getData() public view returns (uint8[5] memory){
        return numeros;

    }

}
