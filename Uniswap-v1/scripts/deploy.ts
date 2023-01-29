import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy("Pikachu", "PIKA", (10 ** 18).toString());
  await token.deployed();

  const Factory = await ethers.getContractFactory("Factory");
  const factory = await Factory.deploy();
  console.log("typeof factory", typeof factory);
  console.log("factory", factory);

  const x = await factory.deployed();
  console.log("typeof x", typeof x);
  console.log("x", x);
  console.log("factory deployed to:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
