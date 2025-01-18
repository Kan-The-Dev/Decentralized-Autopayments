import { useState } from "react";
import { ethers } from "ethers";

const MandateForm = ({ contract, account }) => {
  const [receiver, setReceiver] = useState("");
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [interval, setInterval] = useState("");

  const createMandate = async () => {
    const tx = await contract.createMandate(
      receiver,
      token,
      ethers.utils.parseEther(amount),
      ethers.utils.parseEther(maxAmount),
      interval
    );
    await tx.wait();
    alert("Mandate Created!");
  };

  return (
    <div>
      <input type="text" placeholder="Receiver Address" onChange={(e) => setReceiver(e.target.value)} />
      <input type="text" placeholder="Token Address" onChange={(e) => setToken(e.target.value)} />
      <input type="text" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Max Amount" onChange={(e) => setMaxAmount(e.target.value)} />
      <input type="text" placeholder="Interval (seconds)" onChange={(e) => setInterval(e.target.value)} />
      <button onClick={createMandate}>Create Mandate</button>
    </div>
  );
};

export default MandateForm;
