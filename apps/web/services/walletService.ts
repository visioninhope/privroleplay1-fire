import { ethers } from 'ethers';
import { getNetworkForChainId } from '@thetalabs/theta-js/src/networks';

export class WalletService {
  private provider: ethers.providers.Web3Provider | null = null;
  private signer: ethers.Signer | null = null;

  async connect(strategy: string, data: any) {
    switch (strategy) {
      case 'mnemonic-phrase':
        return this.connectWithMnemonic(data.mnemonic, data.derivationPath);
      case 'keystore-file':
        return this.connectWithKeystore(data.keystore, data.password);
      case 'private-key':
        return this.connectWithPrivateKey(data.privateKey);
      case 'hardware-wallet':
        // Implement hardware wallet connection
        break;
      default:
        throw new Error('Unsupported unlock strategy');
    }
  }

  private async connectWithMnemonic(mnemonic: string, path: string) {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
    this.provider = new ethers.providers.JsonRpcProvider('https://eth-rpc-api.thetatoken.org/rpc');
    this.signer = wallet.connect(this.provider);
    return this.signer.getAddress();
  }

  private async connectWithKeystore(keystore: string, password: string) {
    const wallet = await ethers.Wallet.fromEncryptedJson(keystore, password);
    this.provider = new ethers.providers.JsonRpcProvider('https://eth-rpc-api.thetatoken.org/rpc');
    this.signer = wallet.connect(this.provider);
    return this.signer.getAddress();
  }

  private async connectWithPrivateKey(privateKey: string) {
    const wallet = new ethers.Wallet(privateKey);
    this.provider = new ethers.providers.JsonRpcProvider('https://eth-rpc-api.thetatoken.org/rpc');
    this.signer = wallet.connect(this.provider);
    return this.signer.getAddress();
  }

  async getBalance(address: string) {
    if (!this.provider) throw new Error('Not connected');
    return this.provider.getBalance(address);
  }

  async getTokenBalance(address: string, tokenAddress: string) {
    if (!this.provider) throw new Error('Not connected');
    const tokenContract = new ethers.Contract(
      tokenAddress,
      ['function balanceOf(address) view returns (uint256)'],
      this.provider
    );
    return tokenContract.balanceOf(address);
  }

  async getNetwork() {
    if (!this.provider) throw new Error('Not connected');
    const network = await this.provider.getNetwork();
    return getNetworkForChainId(network.chainId);
  }
}

export const walletService = new WalletService();