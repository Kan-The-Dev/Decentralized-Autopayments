import { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletConnector from "./WalletConnector";
import MandateForm from "./MandateForm";
import contractABI from "./contractABI.json";

const App = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    setContract(contractInstance);
  }, []);

  return (
    <div>
      <WalletConnector setAccount={setAccount} />
      {account && <MandateForm contract={contract} account={account} />}
    </div>
  );
};

export default App;
