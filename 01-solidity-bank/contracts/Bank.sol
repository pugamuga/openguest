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

    function getSender(address _addr) public view returns(uint){
        console.log(balancesMapping[_addr]);
        return balancesMapping[_addr];
    }

    function getContractBalance() public view returns(address){
        console.log(contractAddress, contractBalance);
        return contractAddress;
    }


   

    function balanceOf(address _addr) public view returns(uint){
        console.log(_addr.balance);
        return _addr.balance;
    }

    
}