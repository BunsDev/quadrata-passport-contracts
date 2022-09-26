/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IQuadGovernanceInterface extends ethers.utils.Interface {
  functions: {
    "addIssuer(address,address)": FunctionFragment;
    "deleteIssuer(address)": FunctionFragment;
    "eligibleAttributes(bytes32)": FunctionFragment;
    "eligibleAttributesArray(uint256)": FunctionFragment;
    "eligibleAttributesByDID(bytes32)": FunctionFragment;
    "eligibleTokenId(uint256)": FunctionFragment;
    "getEligibleAttributesLength()": FunctionFragment;
    "getIssuerAttributePermission(address,bytes32)": FunctionFragment;
    "getIssuerStatus(address)": FunctionFragment;
    "getIssuers()": FunctionFragment;
    "getIssuersLength()": FunctionFragment;
    "getMaxEligibleTokenId()": FunctionFragment;
    "issuers(uint256)": FunctionFragment;
    "issuersTreasury(address)": FunctionFragment;
    "pricePerAttributeFixed(bytes32)": FunctionFragment;
    "pricePerBusinessAttributeFixed(bytes32)": FunctionFragment;
    "revSplitIssuer()": FunctionFragment;
    "setAttributePriceFixed(bytes32,uint256)": FunctionFragment;
    "setBusinessAttributePriceFixed(bytes32,uint256)": FunctionFragment;
    "setEligibleAttribute(bytes32,bool)": FunctionFragment;
    "setEligibleAttributeByDID(bytes32,bool)": FunctionFragment;
    "setEligibleTokenId(uint256,bool,string)": FunctionFragment;
    "setIssuerAttributePermission(address,bytes32,bool)": FunctionFragment;
    "setIssuerStatus(address,bool)": FunctionFragment;
    "setPassportContractAddress(address)": FunctionFragment;
    "setRevSplitIssuer(uint256)": FunctionFragment;
    "setTreasury(address)": FunctionFragment;
    "treasury()": FunctionFragment;
    "updateGovernanceInPassport(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addIssuer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteIssuer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "eligibleAttributes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "eligibleAttributesArray",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "eligibleAttributesByDID",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "eligibleTokenId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEligibleAttributesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuerAttributePermission",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuerStatus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuersLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxEligibleTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "issuers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "issuersTreasury",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "pricePerAttributeFixed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pricePerBusinessAttributeFixed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revSplitIssuer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAttributePriceFixed",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBusinessAttributePriceFixed",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEligibleAttribute",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setEligibleAttributeByDID",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setEligibleTokenId",
    values: [BigNumberish, boolean, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setIssuerAttributePermission",
    values: [string, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setIssuerStatus",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setPassportContractAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRevSplitIssuer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setTreasury", values: [string]): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateGovernanceInPassport",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addIssuer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleteIssuer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eligibleAttributes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eligibleAttributesArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eligibleAttributesByDID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eligibleTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEligibleAttributesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIssuerAttributePermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIssuerStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getIssuers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getIssuersLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxEligibleTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "issuers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "issuersTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pricePerAttributeFixed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pricePerBusinessAttributeFixed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revSplitIssuer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAttributePriceFixed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBusinessAttributePriceFixed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEligibleAttribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEligibleAttributeByDID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEligibleTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIssuerAttributePermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIssuerStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPassportContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRevSplitIssuer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateGovernanceInPassport",
    data: BytesLike
  ): Result;

  events: {
    "AttributePriceUpdatedFixed(bytes32,uint256,uint256)": EventFragment;
    "BusinessAttributePriceUpdatedFixed(bytes32,uint256,uint256)": EventFragment;
    "EligibleAttributeByDIDUpdated(bytes32,bool)": EventFragment;
    "EligibleAttributeUpdated(bytes32,bool)": EventFragment;
    "EligibleTokenUpdated(uint256,bool)": EventFragment;
    "IssuerAdded(address,address)": EventFragment;
    "IssuerAttributePermission(address,bytes32,bool)": EventFragment;
    "IssuerDeleted(address)": EventFragment;
    "IssuerStatusChanged(address,bool)": EventFragment;
    "PassportAddressUpdated(address,address)": EventFragment;
    "RevenueSplitIssuerUpdated(uint256,uint256)": EventFragment;
    "TreasuryUpdated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AttributePriceUpdatedFixed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BusinessAttributePriceUpdatedFixed"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "EligibleAttributeByDIDUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EligibleAttributeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EligibleTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IssuerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IssuerAttributePermission"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IssuerDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IssuerStatusChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PassportAddressUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevenueSplitIssuerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasuryUpdated"): EventFragment;
}

export type AttributePriceUpdatedFixedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    _attribute: string;
    _oldPrice: BigNumber;
    _price: BigNumber;
  }
>;

export type BusinessAttributePriceUpdatedFixedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    _attribute: string;
    _oldPrice: BigNumber;
    _price: BigNumber;
  }
>;

export type EligibleAttributeByDIDUpdatedEvent = TypedEvent<
  [string, boolean] & { _attribute: string; _eligibleStatus: boolean }
>;

export type EligibleAttributeUpdatedEvent = TypedEvent<
  [string, boolean] & { _attribute: string; _eligibleStatus: boolean }
>;

export type EligibleTokenUpdatedEvent = TypedEvent<
  [BigNumber, boolean] & { _tokenId: BigNumber; _eligibleStatus: boolean }
>;

export type IssuerAddedEvent = TypedEvent<
  [string, string] & { _issuer: string; _newTreasury: string }
>;

export type IssuerAttributePermissionEvent = TypedEvent<
  [string, string, boolean] & {
    issuer: string;
    _attribute: string;
    _permission: boolean;
  }
>;

export type IssuerDeletedEvent = TypedEvent<[string] & { _issuer: string }>;

export type IssuerStatusChangedEvent = TypedEvent<
  [string, boolean] & { issuer: string; newStatus: boolean }
>;

export type PassportAddressUpdatedEvent = TypedEvent<
  [string, string] & { _oldAddress: string; _address: string }
>;

export type RevenueSplitIssuerUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber] & { _oldSplit: BigNumber; _split: BigNumber }
>;

export type TreasuryUpdatedEvent = TypedEvent<
  [string, string] & { _oldAddress: string; _address: string }
>;

export class IQuadGovernance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IQuadGovernanceInterface;

  functions: {
    addIssuer(
      _issuer: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteIssuer(
      _issuer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    eligibleAttributes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    eligibleAttributesArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    eligibleAttributesByDID(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    eligibleTokenId(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getEligibleAttributesLength(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getIssuerAttributePermission(
      _issuer: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getIssuerStatus(
      _issuer: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getIssuers(overrides?: CallOverrides): Promise<[string[]]>;

    getIssuersLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMaxEligibleTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    issuers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    issuersTreasury(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    pricePerAttributeFixed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pricePerBusinessAttributeFixed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    revSplitIssuer(overrides?: CallOverrides): Promise<[BigNumber]>;

    setAttributePriceFixed(
      _attribute: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBusinessAttributePriceFixed(
      _attribute: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEligibleAttribute(
      _attribute: BytesLike,
      _eligibleStatus: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEligibleAttributeByDID(
      _attribute: BytesLike,
      _eligibleStatus: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEligibleTokenId(
      _tokenId: BigNumberish,
      _eligibleStatus: boolean,
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIssuerAttributePermission(
      _issuer: string,
      _attribute: BytesLike,
      _permission: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIssuerStatus(
      _issuer: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPassportContractAddress(
      _passportAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRevSplitIssuer(
      _split: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    updateGovernanceInPassport(
      _newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addIssuer(
    _issuer: string,
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteIssuer(
    _issuer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  eligibleAttributes(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  eligibleAttributesArray(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  eligibleAttributesByDID(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  eligibleTokenId(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getEligibleAttributesLength(overrides?: CallOverrides): Promise<BigNumber>;

  getIssuerAttributePermission(
    _issuer: string,
    _attribute: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getIssuerStatus(_issuer: string, overrides?: CallOverrides): Promise<boolean>;

  getIssuers(overrides?: CallOverrides): Promise<string[]>;

  getIssuersLength(overrides?: CallOverrides): Promise<BigNumber>;

  getMaxEligibleTokenId(overrides?: CallOverrides): Promise<BigNumber>;

  issuers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  issuersTreasury(arg0: string, overrides?: CallOverrides): Promise<string>;

  pricePerAttributeFixed(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pricePerBusinessAttributeFixed(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  revSplitIssuer(overrides?: CallOverrides): Promise<BigNumber>;

  setAttributePriceFixed(
    _attribute: BytesLike,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBusinessAttributePriceFixed(
    _attribute: BytesLike,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEligibleAttribute(
    _attribute: BytesLike,
    _eligibleStatus: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEligibleAttributeByDID(
    _attribute: BytesLike,
    _eligibleStatus: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEligibleTokenId(
    _tokenId: BigNumberish,
    _eligibleStatus: boolean,
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIssuerAttributePermission(
    _issuer: string,
    _attribute: BytesLike,
    _permission: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIssuerStatus(
    _issuer: string,
    _status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPassportContractAddress(
    _passportAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRevSplitIssuer(
    _split: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasury(
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  updateGovernanceInPassport(
    _newGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addIssuer(
      _issuer: string,
      _treasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteIssuer(_issuer: string, overrides?: CallOverrides): Promise<void>;

    eligibleAttributes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    eligibleAttributesArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    eligibleAttributesByDID(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    eligibleTokenId(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getEligibleAttributesLength(overrides?: CallOverrides): Promise<BigNumber>;

    getIssuerAttributePermission(
      _issuer: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getIssuerStatus(
      _issuer: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getIssuers(overrides?: CallOverrides): Promise<string[]>;

    getIssuersLength(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxEligibleTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    issuers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    issuersTreasury(arg0: string, overrides?: CallOverrides): Promise<string>;

    pricePerAttributeFixed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pricePerBusinessAttributeFixed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revSplitIssuer(overrides?: CallOverrides): Promise<BigNumber>;

    setAttributePriceFixed(
      _attribute: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBusinessAttributePriceFixed(
      _attribute: BytesLike,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setEligibleAttribute(
      _attribute: BytesLike,
      _eligibleStatus: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setEligibleAttributeByDID(
      _attribute: BytesLike,
      _eligibleStatus: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setEligibleTokenId(
      _tokenId: BigNumberish,
      _eligibleStatus: boolean,
      _uri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setIssuerAttributePermission(
      _issuer: string,
      _attribute: BytesLike,
      _permission: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setIssuerStatus(
      _issuer: string,
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setPassportContractAddress(
      _passportAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRevSplitIssuer(
      _split: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasury(_treasury: string, overrides?: CallOverrides): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    updateGovernanceInPassport(
      _newGovernance: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AttributePriceUpdatedFixed(bytes32,uint256,uint256)"(
      _attribute?: null,
      _oldPrice?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _attribute: string; _oldPrice: BigNumber; _price: BigNumber }
    >;

    AttributePriceUpdatedFixed(
      _attribute?: null,
      _oldPrice?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _attribute: string; _oldPrice: BigNumber; _price: BigNumber }
    >;

    "BusinessAttributePriceUpdatedFixed(bytes32,uint256,uint256)"(
      _attribute?: null,
      _oldPrice?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _attribute: string; _oldPrice: BigNumber; _price: BigNumber }
    >;

    BusinessAttributePriceUpdatedFixed(
      _attribute?: null,
      _oldPrice?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _attribute: string; _oldPrice: BigNumber; _price: BigNumber }
    >;

    "EligibleAttributeByDIDUpdated(bytes32,bool)"(
      _attribute?: null,
      _eligibleStatus?: null
    ): TypedEventFilter<
      [string, boolean],
      { _attribute: string; _eligibleStatus: boolean }
    >;

    EligibleAttributeByDIDUpdated(
      _attribute?: null,
      _eligibleStatus?: null
    ): TypedEventFilter<
      [string, boolean],
      { _attribute: string; _eligibleStatus: boolean }
    >;

    "EligibleAttributeUpdated(bytes32,bool)"(
      _attribute?: null,
      _eligibleStatus?: null
    ): TypedEventFilter<
      [string, boolean],
      { _attribute: string; _eligibleStatus: boolean }
    >;

    EligibleAttributeUpdated(
      _attribute?: null,
      _eligibleStatus?: null
    ): TypedEventFilter<
      [string, boolean],
      { _attribute: string; _eligibleStatus: boolean }
    >;

    "EligibleTokenUpdated(uint256,bool)"(
      _tokenId?: null,
      _eligibleStatus?: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { _tokenId: BigNumber; _eligibleStatus: boolean }
    >;

    EligibleTokenUpdated(
      _tokenId?: null,
      _eligibleStatus?: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { _tokenId: BigNumber; _eligibleStatus: boolean }
    >;

    "IssuerAdded(address,address)"(
      _issuer?: string | null,
      _newTreasury?: string | null
    ): TypedEventFilter<
      [string, string],
      { _issuer: string; _newTreasury: string }
    >;

    IssuerAdded(
      _issuer?: string | null,
      _newTreasury?: string | null
    ): TypedEventFilter<
      [string, string],
      { _issuer: string; _newTreasury: string }
    >;

    "IssuerAttributePermission(address,bytes32,bool)"(
      issuer?: string | null,
      _attribute?: null,
      _permission?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { issuer: string; _attribute: string; _permission: boolean }
    >;

    IssuerAttributePermission(
      issuer?: string | null,
      _attribute?: null,
      _permission?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { issuer: string; _attribute: string; _permission: boolean }
    >;

    "IssuerDeleted(address)"(
      _issuer?: string | null
    ): TypedEventFilter<[string], { _issuer: string }>;

    IssuerDeleted(
      _issuer?: string | null
    ): TypedEventFilter<[string], { _issuer: string }>;

    "IssuerStatusChanged(address,bool)"(
      issuer?: string | null,
      newStatus?: null
    ): TypedEventFilter<
      [string, boolean],
      { issuer: string; newStatus: boolean }
    >;

    IssuerStatusChanged(
      issuer?: string | null,
      newStatus?: null
    ): TypedEventFilter<
      [string, boolean],
      { issuer: string; newStatus: boolean }
    >;

    "PassportAddressUpdated(address,address)"(
      _oldAddress?: string | null,
      _address?: string | null
    ): TypedEventFilter<
      [string, string],
      { _oldAddress: string; _address: string }
    >;

    PassportAddressUpdated(
      _oldAddress?: string | null,
      _address?: string | null
    ): TypedEventFilter<
      [string, string],
      { _oldAddress: string; _address: string }
    >;

    "RevenueSplitIssuerUpdated(uint256,uint256)"(
      _oldSplit?: null,
      _split?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { _oldSplit: BigNumber; _split: BigNumber }
    >;

    RevenueSplitIssuerUpdated(
      _oldSplit?: null,
      _split?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { _oldSplit: BigNumber; _split: BigNumber }
    >;

    "TreasuryUpdated(address,address)"(
      _oldAddress?: string | null,
      _address?: string | null
    ): TypedEventFilter<
      [string, string],
      { _oldAddress: string; _address: string }
    >;

    TreasuryUpdated(
      _oldAddress?: string | null,
      _address?: string | null
    ): TypedEventFilter<
      [string, string],
      { _oldAddress: string; _address: string }
    >;
  };

  estimateGas: {
    addIssuer(
      _issuer: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteIssuer(
      _issuer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    eligibleAttributes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eligibleAttributesArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eligibleAttributesByDID(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eligibleTokenId(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEligibleAttributesLength(overrides?: CallOverrides): Promise<BigNumber>;

    getIssuerAttributePermission(
      _issuer: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIssuerStatus(
      _issuer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIssuers(overrides?: CallOverrides): Promise<BigNumber>;

    getIssuersLength(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxEligibleTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    issuers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    issuersTreasury(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pricePerAttributeFixed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pricePerBusinessAttributeFixed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revSplitIssuer(overrides?: CallOverrides): Promise<BigNumber>;

    setAttributePriceFixed(
      _attribute: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBusinessAttributePriceFixed(
      _attribute: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEligibleAttribute(
      _attribute: BytesLike,
      _eligibleStatus: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEligibleAttributeByDID(
      _attribute: BytesLike,
      _eligibleStatus: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEligibleTokenId(
      _tokenId: BigNumberish,
      _eligibleStatus: boolean,
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIssuerAttributePermission(
      _issuer: string,
      _attribute: BytesLike,
      _permission: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIssuerStatus(
      _issuer: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPassportContractAddress(
      _passportAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRevSplitIssuer(
      _split: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    updateGovernanceInPassport(
      _newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addIssuer(
      _issuer: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteIssuer(
      _issuer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    eligibleAttributes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eligibleAttributesArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eligibleAttributesByDID(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eligibleTokenId(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEligibleAttributesLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIssuerAttributePermission(
      _issuer: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIssuerStatus(
      _issuer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIssuers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIssuersLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMaxEligibleTokenId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issuers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issuersTreasury(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pricePerAttributeFixed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pricePerBusinessAttributeFixed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revSplitIssuer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAttributePriceFixed(
      _attribute: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBusinessAttributePriceFixed(
      _attribute: BytesLike,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEligibleAttribute(
      _attribute: BytesLike,
      _eligibleStatus: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEligibleAttributeByDID(
      _attribute: BytesLike,
      _eligibleStatus: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEligibleTokenId(
      _tokenId: BigNumberish,
      _eligibleStatus: boolean,
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIssuerAttributePermission(
      _issuer: string,
      _attribute: BytesLike,
      _permission: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIssuerStatus(
      _issuer: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPassportContractAddress(
      _passportAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRevSplitIssuer(
      _split: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateGovernanceInPassport(
      _newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
