// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "hardhat/console.sol";

contract Bank{
    address contractAddress = address(this);
    uint contractBalance = address(this).balance;

    mapping (address => uint) balancesMapping;

    receive() external payable {
        uint amountOfSend = msg.value;
        balancesMapping[msg.sender] = amountOfSend;
    }
}