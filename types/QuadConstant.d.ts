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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface QuadConstantInterface extends ethers.utils.Interface {
  functions: {
    "DIGEST_TO_SIGN()": FunctionFragment;
    "GOVERNANCE_ROLE()": FunctionFragment;
    "ISSUER_ROLE()": FunctionFragment;
    "PAUSER_ROLE()": FunctionFragment;
    "READER_ROLE()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DIGEST_TO_SIGN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GOVERNANCE_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ISSUER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "READER_ROLE",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DIGEST_TO_SIGN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GOVERNANCE_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ISSUER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "READER_ROLE",
    data: BytesLike
  ): Result;

  events: {};
}

export class QuadConstant extends BaseContract {
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

  interface: QuadConstantInterface;

  functions: {
    DIGEST_TO_SIGN(overrides?: CallOverrides): Promise<[string]>;

    GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<[string]>;

    ISSUER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    READER_ROLE(overrides?: CallOverrides): Promise<[string]>;
  };

  DIGEST_TO_SIGN(overrides?: CallOverrides): Promise<string>;

  GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<string>;

  ISSUER_ROLE(overrides?: CallOverrides): Promise<string>;

  PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

  READER_ROLE(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DIGEST_TO_SIGN(overrides?: CallOverrides): Promise<string>;

    GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<string>;

    ISSUER_ROLE(overrides?: CallOverrides): Promise<string>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

    READER_ROLE(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    DIGEST_TO_SIGN(overrides?: CallOverrides): Promise<BigNumber>;

    GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    ISSUER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    READER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DIGEST_TO_SIGN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ISSUER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    READER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
