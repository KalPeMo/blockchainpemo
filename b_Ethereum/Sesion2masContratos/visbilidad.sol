//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Base{
    uint public numero1 = 2;
    uint private numero2 = 4;
    uint internal numero3 = 5;

    function suma() private view returns(uint){
        return numero1 + numero2;
    }

    function llamarSumar() public view returns(uint){
        return suma();
    }

    function funcionInternal() internal pure returns(string memory){
        return "LLamado a funcion interna";
    }

    function llamadoFuncionInterna() public pure returns(string memory){
        return funcionInternal();
    }

    function pruebaExternal() external pure returns(string memory){
        return "LLamado funcion externa";
    }



}

contract Hijo is Base{

    function mostrarInternalVariable() public view returns(uint){
        return numero3;
    }

    function llamarExternal() public view returns(string memory){
        return pruebaExternal();
    }

}
