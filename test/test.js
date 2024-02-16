const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const increment = await ethers.deployContract("increment");

    const counter = await increment.getCounter();
    expect(counter).to.equal(0);
    await increment.increaseCounter();
    expect(counter).to.equal(1);
  });
});