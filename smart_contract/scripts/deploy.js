const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("BuyTransactions");
  const transactions = await Transactions.deploy();


  await transactions.deployed();

  console.log("Energy Transactions deployed to: ", transactions.address);
}

const runMain = async () =>{
  try {
    await main();
    process.exit(0);
  } catch (error) {
          console.error(error);
          process.exit(1);
  }
}

runMain();
