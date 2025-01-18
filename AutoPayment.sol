// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
}

contract AutoPayment {
    struct Mandate {
        address sender;
        address receiver;
        address token;
        uint256 amount;
        uint256 maxAmount;
        uint256 nextPayment;
        uint256 interval;
        bool active;
    }

    mapping(bytes32 => Mandate) public mandates;

    event MandateCreated(bytes32 id, address sender, address receiver, uint256 amount, uint256 interval);
    event PaymentExecuted(bytes32 id, uint256 amount);
    event MandateCancelled(bytes32 id);

    function createMandate(address receiver, address token, uint256 amount, uint256 maxAmount, uint256 interval) external {
        bytes32 id = keccak256(abi.encodePacked(msg.sender, receiver, token, block.timestamp));
        mandates[id] = Mandate(msg.sender, receiver, token, amount, maxAmount, block.timestamp + interval, interval, true);
        emit MandateCreated(id, msg.sender, receiver, amount, interval);
    }

    function executePayment(bytes32 id) external {
        Mandate storage mandate = mandates[id];
        require(mandate.active, "Mandate inactive");
        require(block.timestamp >= mandate.nextPayment, "Payment not due yet");
        require(mandate.amount <= mandate.maxAmount, "Amount exceeds max limit");

        IERC20 token = IERC20(mandate.token);
        require(token.allowance(mandate.sender, address(this)) >= mandate.amount, "Insufficient allowance");

        token.transferFrom(mandate.sender, mandate.receiver, mandate.amount);
        mandate.nextPayment += mandate.interval;

        emit PaymentExecuted(id, mandate.amount);
    }

    function cancelMandate(bytes32 id) external {
        require(mandates[id].sender == msg.sender, "Only sender can cancel");
        mandates[id].active = false;
        emit MandateCancelled(id);
    }
}
