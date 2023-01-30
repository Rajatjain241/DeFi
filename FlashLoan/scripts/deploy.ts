import hre from "hardhat";

async function main() {
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
  const flashloan = await FlashLoan.deploy(
    "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D"
  );

  await flashloan.deployed();

  console.log("The address of the deployed contract is : ", flashloan.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
