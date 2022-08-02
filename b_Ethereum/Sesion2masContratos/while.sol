//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Types{

    uint[] public data;
    uint8 j = 0;

    function loop() public{
        while(j< 5){
            data.push(j);
            j++;
        }
    }

    function getData() public view returns(uint[] memory){
        return data;
    }

}