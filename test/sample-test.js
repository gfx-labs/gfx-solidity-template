const { expect } = require("chai");

describe("Gfx", function() {
  it("Gfx", async function() {
    const Gfx = await ethers.getContractFactory("Gfx");
    const gfx = await Gfx.deploy();
    expect(2).to.equal(1);
  });
});
