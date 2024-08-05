// apps/web/lib/thetaWalletService.ts
import { Wallet } from './wallet'; // Import the Wallet class from thet.ai project

export class ThetaWalletService {
  private wallet: Wallet;

  constructor() {
    this.wallet = new Wallet();
  }

  async connect() {
    return this.wallet.connect();
  }

  async sendTransaction(to: string, value: string, message?: string) {
    return this.wallet.sendTransaction(to, value, message);
  }

  async getBalance() {
    return this.wallet.getBalance();
  }

  async switchToThetaNetwork() {
    return this.wallet.switchToThetaNetworkMainnet();
  }
}