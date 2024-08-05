declare module '@thetalabs/theta-js' {
  import BigNumber from 'bignumber.js';

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
    constructor(address: string, thetaWei: BigNumber, tfuelWei: BigNumber, sequence: number);
    address: string;
    sequence: number;
    signature: string;
    coins: Coins;
    setSignature(signature: string): void;
    rlpInput(): any[];
  }

  export class TxOutput {
    constructor(address: string, thetaWei: BigNumber, tfuelWei: BigNumber);
    address: string;
    coins: Coins;
    rlpInput(): any[];
  }

  export class Tx {
    constructor();
    signBytes(chainID: string): string;
    getType(): TxType;
    rlpInput(): any[];
  }

  export class SendTx extends Tx {
    constructor(senderAddr: string, outputs: Array<{address: string, thetaWei: BigNumber, tfuelWei: BigNumber}>, feeInTFuelWei: BigNumber, senderSequence: number);
    fee: Coins;
    inputs: TxInput[];
    outputs: TxOutput[];
    setSignature(signature: string): void;
  }

  export class DepositStakeTx extends Tx {
    constructor(source: string, holderAddress: string, stakeInThetaWei: BigNumber, feeInTFuelWei: BigNumber, purpose: StakePurpose, senderSequence: number);
    fee: Coins;
    source: TxInput;
    holder: TxOutput;
    purpose: StakePurpose;
    setSignature(signature: string): void;
  }

  export class WithdrawStakeTx extends Tx {
    constructor(source: string, holder: string, feeInTFuelWei: BigNumber, purpose: StakePurpose, senderSequence: number);
    fee: Coins;
    source: TxInput;
    holder: TxOutput;
    purpose: StakePurpose;
    setSignature(signature: string): void;
  }

  export class SmartContractTx extends Tx {
    constructor(fromAddress: string, toAddress: string, gasLimit: number, gasPrice: BigNumber, data: string, value: BigNumber, senderSequence: number);
    from: TxInput;
    to: TxOutput;
    gasLimit: number;
    gasPrice: BigNumber;
    data: Uint8Array;
    setSignature(signature: string): void;
  }

  export class TxSigner {
    static signAndSerializeTx(chainID: string, tx: Tx, privateKey: string): string;
    static signTx(chainID: string, tx: Tx, privateKey: string): Tx;
    static serializeTx(tx: Tx): string;
  }

  export namespace Utils {
    function hexToBytes(hex: string): number[];
    function bytesToHex(bytes: number[]): string;
  }
}

declare module '@thetalabs/theta-js/src/networks' {
  export const Networks: {
    __deprecated__ETHEREUM: 'ethereum';
    THETA_TESTNET: 'testnet';
    THETA_TESTNET_AMBER: 'testnet_amber';
    THETA_TESTNET_SAPPHIRE: 'testnet_sapphire';
    THETA_MAINNET: 'mainnet';
    THETA_PRIVATENET: 'privatenet';
  };

  export type NetworkType = typeof Networks[keyof typeof Networks];

  export interface NetworkDescription {
    id: NetworkType;
    name: string;
    description: string;
    faucetId?: string;
  }

  export const NetworksWithDescriptions: NetworkDescription[];

  export const NetworksById: Record<NetworkType, NetworkDescription>;

  export const NetworkExplorerUrls: Record<NetworkType, string>;

  export function isEthereumNetwork(network: NetworkType): boolean;
  export function isThetaNetwork(network: NetworkType): boolean;
  export function canEdgeNodeStake(network: NetworkType): boolean;
  export function canGuardianNodeStake(network: NetworkType): boolean;
  export function canViewSmartContracts(network: NetworkType): boolean;
  export function getNetworkName(networkId: NetworkType): string | undefined;
  export function getNetworkFaucetId(networkId: NetworkType): string | undefined;

  // Additional types and interfaces based on thet.ai repository
  export type TNetwork = "Theta Mainnet" | "Theta Testnet";

  export interface INetwork {
    chainId: string;
    chainName: string;
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls?: string[];
    blockExplorerUrls?: string[];
  }

  // Functions for network management (based on thet.ai repository)
  export function switchNetwork(id: string, network: INetwork): Promise<void>;
  export function detectNetwork(network: TNetwork): Promise<void>;
  export function switchToThetaNetworkMainnet(): Promise<void>;
  export function switchToThetaNetworkTestnet(): Promise<void>;

  // Additional constants from thet.ai repository
  export const Networks: TNetwork[];
}

// Extend the declaration to include elements from thetajs.esm.js
declare module '@thetalabs/theta-js' {
  import BigNumber from 'bignumber.js';

  export class Tx {
    constructor();
    signBytes(chainID: string): Uint8Array;
    getType(): number;
    rlpInput(): any[];
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

  export const TxType: {
    TxTypeCoinbase: number;
    TxTypeSlash: number;
    TxTypeSend: number;
    TxTypeReserveFund: number;
    TxTypeReleaseFund: number;
    TxTypeServicePayment: number;
    TxTypeSplitRule: number;
    TxTypeSmartContract: number;
    TxTypeDepositStake: number;
    TxTypeWithdrawStake: number;
    TxTypeDepositStakeV2: number;
  };

  export class SendTx extends Tx {
    constructor(senderAddr: string, outputs: Array<{address: string, thetaWei: BigNumber | string, tfuelWei: BigNumber | string}>, feeInTFuelWei: BigNumber | string, senderSequence: number);
    fee: Coins;
    inputs: TxInput[];
    outputs: TxOutput[];
    setSignature(signature: string): void;
  }

  export const StakePurposes: {
    StakeForValidator: number;
    StakeForGuardian: number;
    StakeForEliteEdge: number;
  };

  export class StakeTx extends Tx {}

  export class DepositStakeTx extends StakeTx {
    constructor(source: string, holderAddress: string, stakeInThetaWei: BigNumber | string, feeInTFuelWei: BigNumber | string, purpose: number, senderSequence: number);
    fee: Coins;
    source: TxInput;
    holder: TxOutput;
    purpose: number;
  }

  export class DepositStakeV2Tx extends StakeTx {
    static isValidHolderSummary(purpose: number, holderSummary: string): boolean;
    constructor(source: string, holderSummary: string, amount: BigNumber | string, feeInTFuelWei: BigNumber | string, purpose: number, senderSequence: number);
    fee: Coins;
    source: TxInput;
    holder: TxOutput;
    purpose: number;
    blsPubkeyBytes: Uint8Array;
    blsPopBytes: Uint8Array;
    holderSigBytes: Uint8Array;
  }

  export class WithdrawStakeTx extends StakeTx {
    constructor(source: string, holder: string, feeInTFuelWei: BigNumber | string, purpose: number, senderSequence: number);
    fee: Coins;
    source: TxInput;
    holder: TxOutput;
    purpose: number;
  }

  export class SmartContractTx extends Tx {
    constructor(fromAddress: string, toAddress: string, gasLimit: number, gasPrice: BigNumber | string, data: string, value: BigNumber | string, senderSequence: number);
    from: TxInput;
    to: TxOutput;
    gasLimit: number;
    gasPrice: BigNumber | string;
    data: Uint8Array;
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