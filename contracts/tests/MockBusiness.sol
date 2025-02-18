//SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import "./DeFi.sol";
import "../interfaces/IQuadPassport.sol";

contract MockBusiness {
    event GetAttributesEventBusiness(bytes32[] attrValues, uint256[] epochs, address[] issuers);
    event GetAttributesBulkEventBusiness(bytes32[] attrValues, uint256[] epochs, address[] issuers);

    DeFi public defi;

    constructor(address _defi) {
        defi = DeFi(_defi);
    }

    function deposit(bytes32 _attribute) public payable {
        IQuadPassportStore.Attribute[] memory attributes = defi.deposit{value: msg.value}(address(this), _attribute);

        bytes32[] memory attrValues = new bytes32[](attributes.length);
        uint256[] memory epochs = new uint256[](attributes.length);
        address[] memory issuers = new address[](attributes.length);

        for (uint256 i = 0; i < attributes.length; i++) {
            attrValues[i] = attributes[i].value;
            epochs[i] = attributes[i].epoch;
            issuers[i] = attributes[i].issuer;
        }
        emit GetAttributesEventBusiness(attrValues, epochs, issuers);
    }

    function depositLegacy(bytes32 _attribute) public payable {
        (
            bytes32[] memory attrValues,
            uint256[] memory epochs,
            address[] memory issuers
        ) = defi.depositLegacy{value: msg.value}(address(this), _attribute);

        emit GetAttributesEventBusiness(attrValues, epochs, issuers);
    }

    function depositBulk(bytes32[] calldata _attributes) public payable {
        IQuadPassportStore.Attribute[] memory attributes = defi.depositBulk{value: msg.value}(address(this), _attributes);

        bytes32[] memory attrValues = new bytes32[](attributes.length);
        uint256[] memory epochs = new uint256[](attributes.length);
        address[] memory issuers = new address[](attributes.length);

        for (uint256 i = 0; i < attributes.length; i++) {
            attrValues[i] = attributes[i].value;
            epochs[i] = attributes[i].epoch;
            issuers[i] = attributes[i].issuer;
        }
        emit GetAttributesBulkEventBusiness(attrValues, epochs, issuers);
    }

    function depositBulkLegacy(bytes32[] calldata _attributes) public payable {
        (
            bytes32[] memory attrValues,
            uint256[] memory epochs,
            address[] memory issuers
        ) = defi.depositBulkLegacy{value: msg.value}(address(this), _attributes);

        emit GetAttributesBulkEventBusiness(attrValues, epochs, issuers);
    }

    function burnPassports() public {
        IQuadPassport(defi.passport()).burnPassports();
    }
}
