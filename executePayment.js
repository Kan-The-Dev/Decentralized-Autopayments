const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("YOUR_INFURA_RPC_URL");
const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);
const contract = new ethers.Contract("YOUR_CONTRACT_ADDRESS", require("./contractABI.json"), wallet);

const executePayments = async () => {
  const tx = await contract.executePayment("MANDATE_ID");
  await tx.wait();
  console.log("Payment executed");
};

setInterval(executePayments, 60000); // Runs every 1 minute
