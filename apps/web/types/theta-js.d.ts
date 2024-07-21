declare module '@thetalabs/theta-js' {
  import { BigNumber } from 'bignumber.js';

  export enum TxType {
    TxTypeCoinbase = 0,
    TxTypeSlash = 1,
    TxTypeSend = 2,
    TxTypeReserveFund = 3,
    TxTypeReleaseFund = 4,
    TxTypeServicePayment = 5,
    TxTypeSplitRule = 6,
    TxTypeSmartContract = 7,
    TxTypeDepositStake = 8,
    TxTypeWithdrawStake = 9,
    TxTypeDepositStakeV2 = 10,
  }

  export enum StakePurpose {
    StakeForValidator = 0,
    StakeForGuardian = 1,
    StakeForEliteEdge = 2,
  }

  export class Coins {
    constructor(thetaWei: BigNumber, tfuelWei: BigNumber);
    thetaWei: BigNumber;
    tfuelWei: BigNumber;
    rlpInput(): any[];
  }

  export class TxInput {
    constructor(address: string, thetaWei: BigNumber | null, tfuelWei: BigNumber | null, sequence: number);
    address: string;
    sequence: number;
    signature: string;
    coins: Coins;
    setSignature(signature: string): void;
    rlpInput(): any[];
  }

  export class TxOutput {
    constructor(address: string, thetaWei: BigNumber | null, tfuelWei: BigNumber | null);
    address: string;
    coins: Coins;
    rlpInput(): any[];
  }

  export class Tx {
    getType(): TxType;
    rlpInput(): any[];
    signBytes(chainID: string): string;
    setSignature(signature: string): void;
  }

  export class SendTx extends Tx {
    constructor(
      senderAddr: string,
      outputs: Array<{ address: string; thetaWei: BigNumber; tfuelWei: BigNumber }>,
      feeInTFuelWei: BigNumber,
      senderSequence: number
    );
    fee: Coins;
    inputs: TxInput[];
    outputs: TxOutput[];
    setSignature(signature: string): void;
  }

  export class SmartContractTx extends Tx {
    constructor(
      fromAddress: string,
      toAddress: string,
      gasLimit: number,
      gasPrice: BigNumber,
      data: string,
      value: BigNumber,
      senderSequence: number
    );
    from: TxInput;
    to: TxOutput;
    gasLimit: number;
    gasPrice: BigNumber;
    data: Uint8Array;
    setSignature(signature: string): void;
  }

  export class DepositStakeTx extends Tx {
    constructor(
      source: string,
      holder: string,
      amount: BigNumber,
      feeInTFuelWei: BigNumber,
      purpose: StakePurpose,
      senderSequence: number
    );
    fee: Coins;
    source: TxInput;
    holder: TxOutput;
    purpose: StakePurpose;
    setSignature(signature: string): void;
  }

  export class DepositStakeV2Tx extends Tx {
    constructor(
      source: string,
      holderSummary: string,
      amount: BigNumber,
      feeInTFuelWei: BigNumber,
      purpose: StakePurpose,
      senderSequence: number
    );
    static isValidHolderSummary(purpose: StakePurpose, holderSummary: string): boolean;
  }

  export class WithdrawStakeTx extends Tx {
    constructor(
      source: string,
      holder: string,
      feeInTFuelWei: BigNumber,
      purpose: StakePurpose,
      senderSequence: number
    );
    fee: Coins;
    source: TxInput;
    holder: TxOutput;
    purpose: StakePurpose;
    setSignature(signature: string): void;
  }

  export class TxSigner {
    static signAndSerializeTx(chainID: string, tx: Tx, privateKey: string): string;
    static signTx(chainID: string, tx: Tx, privateKey: string): Tx;
    static serializeTx(tx: Tx): string;
  }

  export const Utils: {
    hexToBytes(hex: string): number[];
    bytesToHex(bytes: number[]): string;
  };
}

declare module '@thetalabs/theta-js/src/constants' {
  export enum TxType {
    TxTypeCoinbase = 0,
    TxTypeSlash = 1,
    TxTypeSend = 2,
    TxTypeReserveFund = 3,
    TxTypeReleaseFund = 4,
    TxTypeServicePayment = 5,
    TxTypeSplitRule = 6,
    TxTypeSmartContract = 7,
    TxTypeDepositStake = 8,
    TxTypeWithdrawStake = 9,
    TxTypeDepositStakeV2 = 10,
  }

  export enum StakePurpose {
    StakeForValidator = 0,
    StakeForGuardian = 1,
    StakeForEliteEdge = 2,
  }
}