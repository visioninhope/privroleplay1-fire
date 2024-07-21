import BigNumber from 'bignumber.js';
import * as ThetaJS from '@thetalabs/theta-js';

export class ThetaService {
  private static chainId = 'mainnet'; // or 'testnet', depending on your needs

  static setChainId(newChainId: string) {
    this.chainId = newChainId;
  }

  static async createSendTransaction(
    from: string,
    to: string,
    amount: string,
    tokenType: 'THETA' | 'TFUEL',
    sequence: number
  ): Promise<ThetaJS.SendTx> {
    const ten18 = new BigNumber(10).pow(18);
    const amountWei = new BigNumber(amount).multipliedBy(ten18);
    const feeInTFuelWei = new BigNumber('0.3').multipliedBy(ten18);

    const outputs = [{
      address: to,
      thetaWei: tokenType === 'THETA' ? amountWei : new BigNumber(0),
      tfuelWei: tokenType === 'TFUEL' ? amountWei : new BigNumber(0),
    }];

    return new ThetaJS.SendTx(from, outputs, feeInTFuelWei, sequence);
  }

  static async signTransaction(tx: ThetaJS.Tx, privateKey: string): Promise<string> {
    return ThetaJS.TxSigner.signAndSerializeTx(this.chainId, tx, privateKey);
  }

  // Add more methods for other transaction types as needed
}