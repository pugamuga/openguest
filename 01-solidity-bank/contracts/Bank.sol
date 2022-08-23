// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "hardhat/console.sol";

contract Bank{
    uint totalContractBalance = 0;

    function getContractBalance() public view returns(uint){
        return totalContractBalance;
    }

    mapping (address => uint) balancesMapping;

    function addBalance() public payable{
        uint amountOfSend = msg.value;
        balancesMapping[msg.sender] = amountOfSend;
        totalContractBalance = totalContractBalance + amountOfSend;
    }
}