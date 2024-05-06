// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract InboxContainer {
    string public message;
    
    function Inbox(string memory initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    
    function getMessage() public view returns (string memory) {
    return message;
}
    
}