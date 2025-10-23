// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PayVerseEscrow {
    address public arbiter;
    address public buyer;
    address public seller;
    uint256 public amount;
    bool public isFunded;
    bool public isReleased;

    constructor(address _arbiter, address _seller) payable {
        arbiter = _arbiter;
        buyer = msg.sender;
        seller = _seller;
        amount = msg.value;
        isFunded = msg.value > 0;
        isReleased = false;
    }

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "Only arbiter allowed");
        _;
    }

    function fund() external payable {
        require(!isFunded, "Already funded");
        require(msg.value > 0, "Must send funds");
        amount = msg.value;
        isFunded = true;
    }

    function releaseToSeller() external onlyArbiter {
        require(isFunded, "No funds");
        require(!isReleased, "Already released");
        isReleased = true;
        payable(seller).transfer(amount);
    }

    function refundBuyer() external onlyArbiter {
        require(isFunded, "No funds");
        require(!isReleased, "Already released");
        isReleased = true;
        payable(buyer).transfer(amount);
    }
}
