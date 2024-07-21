import * as thetajs from '@thetalabs/theta-js';
import { ethers } from 'ethers';
import { TxType } from "@thetalabs/theta-js/src/constants";

export default class ThetaWallet {
  static async createWallet() {
    const random = thetajs.Wallet.createRandom();
    const mnemonic = random.mnemonic.phrase;
    let wallet = ethers.Wallet.fromMnemonic(mnemonic);
    return { wallet, mnemonic };
  }

  static async signTransaction(unsignedTx: any, privateKey: string) {
    return thetajs.Theta.signTransaction(unsignedTx, privateKey);
  }

  static async createPaymentTransaction(from: string, to: string, amount: string, tokenType: string) {
    const tx = new thetajs.transactions.SendTransaction(
      from,
      to,
      amount,
      tokenType === 'THETA' ? TxType.ThetaSend : TxType.TFuelSend
    );
    return tx;
  }
}