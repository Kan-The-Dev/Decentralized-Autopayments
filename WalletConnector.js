import { useState } from "react";
import { ethers } from "ethers";

const WalletConnector = ({ setAccount }) => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install Metamask to use this feature.");
    }
  };

  return <button onClick={connectWallet}>Connect Wallet</button>;
};

export default WalletConnector;
