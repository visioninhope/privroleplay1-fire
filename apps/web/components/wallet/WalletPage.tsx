import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/src/components/card';
import { Button } from '@repo/ui/src/components/button';
import Link from 'next/link';
import toast from 'react-hot-toast';

// You'll need to create this Wallet class based on the thet.ai implementation
import { Wallet } from '../../app/lib/theta-wallet/wallet';

export function WalletPage() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [handler, setHandler] = useState<Wallet | null>(null);

  useEffect(() => {
    try {
      const walletHandler = new Wallet();
      setHandler(walletHandler);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const connectMetaMask = async () => {
    if (!handler) {
      toast.error("Please install MetaMask extension.");
      return;
    }

    try {
      // Assuming Theta Mainnet, adjust as needed
      const network = "Theta Mainnet";
      const wallet_ = await handler.connect(network);
      
      if (!wallet_) {
        toast.error("An error occurred while connecting your wallet");
        return;
      }

      // Sign message
      const signature = await handler.signMessage("Welcome to PrivRolePlay - Connect your Theta wallet");
      if (!signature) {
        toast.error("You have to sign the message to connect");
        return;
      }

      // Here you would typically validate the signature on your backend
      // For now, we'll just set the wallet address
      setWallet(wallet_);
      toast.success("Successfully connected to MetaMask");
    } catch (error) {
      console.error(error);
      toast.error("Failed to connect. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Wallet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Choose a method to unlock your wallet:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="w-full" onClick={connectMetaMask}>
              {wallet ? `Connected: ${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Connect via MetaMask"}
            </Button>
            <Link href="/wallet/unlock/mnemonic-phrase" passHref>
              <Button variant="outline" className="w-full">Mnemonic Phrase</Button>
            </Link>
            <Link href="/wallet/unlock/keystore-file" passHref>
              <Button variant="outline" className="w-full">Keystore File</Button>
            </Link>
            <Link href="/wallet/unlock/private-key" passHref>
              <Button variant="outline" className="w-full">Private Key</Button>
            </Link>
            <Link href="/wallet/unlock/hardware-wallet" passHref>
              <Button variant="outline" className="w-full">Hardware Wallet</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}