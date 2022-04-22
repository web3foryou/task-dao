//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract ERC20Token is ERC20, AccessControl{
    uint public fee;

    constructor(string memory name_, string memory symbol_, uint amount) ERC20(name_, symbol_) {
        _mint(msg.sender, amount);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function addMember(address addr) public onlyMember{
        _setupRole(DEFAULT_ADMIN_ROLE, addr);
    }

    function setFee(uint _fee) public onlyMember{
        fee = _fee;
    }

    modifier onlyMember() {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Restricted to members.");
        _;
    }
}
