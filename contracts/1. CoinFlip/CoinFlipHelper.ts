import { expect } from "chai";
import { ethers } from "hardhat";

const helper = async (victim: any, attacker: any) => {
  // add code here that will help you pass the test
  while(await victim.consecutiveWins() < 10) {

    try{

      await attacker.hackContract();
    } catch(error) {
      console.log(error);
    }

  }
};

export default helper;
