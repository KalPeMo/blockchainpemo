//SPDX-License-Identifier:MIT

pragma solidity 0.8.7;

contract IfTest{
    bool public finalizado;
    uint8 public contador;

    function startProcess() public returns(bool){

        if (contador>=9){

                finalizado=true;
                contador=0;
        }
        contador++;
        return finalizado;

    }




}
