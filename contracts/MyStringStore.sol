pragma solidity ^0.5.0;

contract MyStringStore {
    string public myString = "Hello World";

    function set(string memory x) public {
        myString = x;
    }

    function getData() public view returns (string memory) {
        return myString;
    }
}
