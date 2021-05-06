pragma solidity =0.5.16;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenGold is ERC20Detailed, ERC20 {
    string public functionCalled;
    uint8 public constant DECIMALS = 18;
    uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(DECIMALS));

    constructor() ERC20Detailed('TokenGold', 'GLD', 18) public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function() external payable{
        functionCalled = 'fallback';
    }
}