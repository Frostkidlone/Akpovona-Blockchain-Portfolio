// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./PayVerseEscrow.sol";

contract PaymentManager {
    mapping(bytes32 => address) public escrows;

    event EscrowCreated(bytes32 indexed id, address escrowAddress);
    event EscrowReleased(bytes32 indexed id);

    function createEscrow(address arbiter, address seller) external payable returns (address) {
        require(msg.value > 0, "Send payment with escrow creation");
        PayVerseEscrow escrow = (new PayVerseEscrow){value: msg.value}(arbiter, seller);
        bytes32 id = keccak256(abi.encodePacked(address(escrow), block.timestamp));
        escrows[id] = address(escrow);
        emit EscrowCreated(id, address(escrow));
        return address(escrow);
    }

    function getEscrow(bytes32 id) external view returns (address) {
        return escrows[id];
    }
}
