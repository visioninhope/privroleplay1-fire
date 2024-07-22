import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/src/components/card';
import { Button } from '@repo/ui/src/components/button';
import Link from 'next/link';

export function WalletPage() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Wallet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Choose a method to unlock your wallet:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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