const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Bigmoon", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Bigmoon");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

//    await greeter.initialize(greeter.address);
/*
    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
*/
  });
});
