//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract MappingDemo{

    mapping(string=>address) public BaseDatos;

    function setInfo(string memory _name, address _wallet) public{
        BaseDatos[_name] = _wallet;
    }

}
