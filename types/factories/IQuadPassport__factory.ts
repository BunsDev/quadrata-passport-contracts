/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IQuadPassport, IQuadPassportInterface } from "../IQuadPassport";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_issuer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "BurnPassportsIssuer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldGovernance",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    name: "GovernanceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "SetAttributeReceipt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_pendingGovernance",
        type: "address",
      },
    ],
    name: "SetPendingGovernance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_issuer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "WithdrawEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_attribute",
        type: "bytes32",
      },
    ],
    name: "attributes",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "value",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "epoch",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "issuer",
            type: "address",
          },
        ],
        internalType: "struct IQuadPassportStore.Attribute[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burnPassports",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "burnPassportsIssuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "passportPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "attrKeys",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "attrValues",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "attrTypes",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32",
            name: "did",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verifiedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "issuedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
        ],
        internalType: "struct IQuadPassportStore.AttributeSetterConfig",
        name: "_config",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_sigIssuer",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_sigAccount",
        type: "bytes",
      },
    ],
    name: "setAttributes",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "attrKeys",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "attrValues",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "attrTypes",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32",
            name: "did",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verifiedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "issuedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
        ],
        internalType: "struct IQuadPassportStore.AttributeSetterConfig",
        name: "_config",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_sigIssuer",
        type: "bytes",
      },
    ],
    name: "setAttributesIssuer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_governanceContract",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "setTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IQuadPassport__factory {
  static readonly abi = _abi;
  static createInterface(): IQuadPassportInterface {
    return new utils.Interface(_abi) as IQuadPassportInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IQuadPassport {
    return new Contract(address, _abi, signerOrProvider) as IQuadPassport;
  }
}
