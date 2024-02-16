pragma solidity ^0.8.0;

contract increment {
    uint256 public counter;

    constructor() {
        counter = 0;
    }
    function increaseCounter() public {
        counter+= 1;
    }
    function getCounter() public view returns (uint256) {
        return counter;
    }
}