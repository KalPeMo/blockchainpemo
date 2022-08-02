//SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

contract OnlineStore{

    string public mensaje;
    mapping(address=>uint) public saldo;
    
    function buySomething() external payable{
        require(msg.value==0.001 ether);
        saldo[msg.sender]=msg.value;
        mensaje="vendido";
    }

}
