# Decentralized AutoPayment System

## Overview
The **Decentralized AutoPayment System** is a smart contract-based solution that allows users to set up automated cryptocurrency payments on a blockchain. Users can configure recurring payments to a recipient, specify the token type, amount, and interval, and set a maximum withdrawal limit to maintain control over their funds. This system ensures security, transparency, and decentralization by eliminating intermediaries.

## Features
- **Automated Payments:** Set up payments at a predefined interval without manual intervention.
- **Multi-Token Support:** Works with any ERC-20 token.
- **Maximum Withdrawal Limit:** Users approve a cap on automatic deductions.
- **Decentralized Control:** No third-party intermediaries involved.
- **Smart Contract Security:** Transactions are executed based on predefined rules, ensuring safety and trust.
- **Seamless Web3 Integration:** Works directly with wallets like MetaMask.

---

## Project Structure
```
decentralized-autopayment/
│── contract/                  
│   ├── AutoPayment.sol       # Solidity smart contract
│── frontend/                 # React Web3 frontend
│   ├── App.js                # Main frontend app
│   ├── WalletConnector.js    # Wallet connection component
│   ├── MandateForm.js        # Form to create autopayment mandates
│   ├── contractABI.json      # ABI for contract interaction
│── backend/                  # Node.js backend automation
│   ├── executePayment.js     # Automation script to execute payments
│── README.md                 # Documentation
```

---

## Installation & Setup
### 1️⃣ Deploy Smart Contract
1. Deploy `AutoPayment.sol` using **Remix or Hardhat**.
2. Copy the **contract address** and **ABI** to `frontend/contractABI.json` and `App.js`.

### 2️⃣ Install Dependencies
```bash
cd frontend
npm install react ethers web3
```

### 3️⃣ Start Frontend
```bash
npm start
```

### 4️⃣ Run Backend Script for Auto-Execution
```bash
cd backend
node executePayment.js
```

---

## Benefits of This Project
### 🔹 Security & Trust
- Payments are **handled by smart contracts**, ensuring no manual errors or fraud.
- **Maximum limit control** prevents unauthorized deductions.

### 🔹 Decentralization
- No **third parties** or banks involved.
- Funds are directly transferred **wallet-to-wallet**.

### 🔹 Flexibility & Automation
- Users can set **custom intervals** for payments (daily, weekly, monthly, etc.).
- Works with **multiple cryptocurrencies**.

### 🔹 Cost Efficiency
- Eliminates middlemen fees.
- Reduces transaction delays compared to traditional banking autopayments.

---

## Future Enhancements
- **Chainlink Automation** for more reliable transaction execution.
- **NFT-based Subscriptions** for membership-based payments.
- **Mobile App Integration** for better user experience.

---

## License
This project is open-source under the **MIT License**.

---

### 🚀 Ready to experience decentralized autopayments? Start now! 🎯

