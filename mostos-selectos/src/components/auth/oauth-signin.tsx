"use client"
import { useSession, signIn } from 'next-auth/react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface OAuthProvider {
  name: string;
  icon: keyof typeof Icons;
  id: string; // Assuming 'id' is used as the provider identifier
}

export function OAuthSignIn() {
  const { status } = useSession();
  const oauthProviders: OAuthProvider[] = [
    { name: 'Google', icon: 'google', id: 'google' },
    
  ];

  const oauthSignIn = async (providerId: string) => {
    try {
      await signIn(providerId, { callbackUrl: '/' });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : undefined;
        const errorMessageToShow = errorMessage || 'Something went wrong, please try again.';
        toast.error(errorMessageToShow);
    }
  };

  return (
    // <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
    <div className="flex flex-col gap-4 mt-3">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon];

        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.id}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={() => void oauthSignIn(provider.id)}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            {provider.name}
          </Button>
        );
      })}
    </div>
  );
}
