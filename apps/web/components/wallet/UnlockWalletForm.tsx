import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/src/components/card';
import { Button } from '@repo/ui/src/components/button';
import { Input } from '@repo/ui/src/components/input';
import { Label } from '@repo/ui/src/components/label';
import { Textarea } from '@repo/ui/src/components/textarea';

type UnlockMethod = 'mnemonic-phrase' | 'keystore-file' | 'private-key' | 'hardware-wallet';

interface UnlockWalletFormProps {
  method: UnlockMethod;
}

export function UnlockWalletForm({ method }: UnlockWalletFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    // Implement wallet unlocking logic here
    console.log('Unlocking wallet with', { method, data });
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unlock Wallet - {method.replace('-', ' ')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {method === 'mnemonic-phrase' && (
            <div className="mb-4">
              <Label htmlFor="mnemonic">Mnemonic Phrase</Label>
              <Textarea
                id="mnemonic"
                {...register('mnemonic', { required: 'Mnemonic phrase is required' })}
                className="mt-1"
              />
              {errors.mnemonic && <p className="text-red-500 text-sm mt-1">{errors.mnemonic.message as string}</p>}
            </div>
          )}
          {method === 'keystore-file' && (
            <div className="mb-4">
              <Label htmlFor="keystoreFile">Keystore File</Label>
              <Input
                id="keystoreFile"
                type="file"
                {...register('keystoreFile', { required: 'Keystore file is required' })}
                className="mt-1"
              />
              {errors.keystoreFile && <p className="text-red-500 text-sm mt-1">{errors.keystoreFile.message as string}</p>}
            </div>
          )}
          {method === 'private-key' && (
            <div className="mb-4">
              <Label htmlFor="privateKey">Private Key</Label>
              <Input
                id="privateKey"
                type="password"
                {...register('privateKey', { required: 'Private key is required' })}
                className="mt-1"
              />
              {errors.privateKey && <p className="text-red-500 text-sm mt-1">{errors.privateKey.message as string}</p>}
            </div>
          )}
          {method === 'hardware-wallet' && (
            <p>Connect your hardware wallet and follow the instructions on your device.</p>
          )}
          <div className="mb-4">
            <Label htmlFor="password">Temporary Password</Label>
            <Input
              id="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="mt-1"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>}
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Unlocking...' : 'Unlock Wallet'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}