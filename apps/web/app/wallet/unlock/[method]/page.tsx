'use client';

import { UnlockWalletForm } from '../../../../components/wallet/UnlockWalletForm';
import { useParams } from 'next/navigation';

export default function UnlockWallet() {
  const params = useParams();
  const method = params.method as 'mnemonic-phrase' | 'keystore-file' | 'private-key' | 'hardware-wallet';

  return (
    <div className="container mx-auto p-4">
      <UnlockWalletForm method={method} />
    </div>
  );
}