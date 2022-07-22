//SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

contract PersonStruct{

    struct Persona{
        uint8 edad;
        uint32 cedula;
        string nombre;


    }


    Persona[] public persona;
    
    function createPerson (uint8 _edad, uint32 _cedula, string memory _nombre) public{
        persona.push(Persona(_edad, _cedula, _nombre));


    }
