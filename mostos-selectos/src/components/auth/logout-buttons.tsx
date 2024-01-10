"use client"
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

import { Skeleton } from '@/components/ui/skeleton';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export function LogOutButtons() {
  const router = useRouter()
  const { data: session } = useSession();
  console.log(session)

  const [isPending, startTransition] = React.useTransition();

  const handleSignOut = async () => {
    try {
      startTransition(() => {
        signOut({ callbackUrl: `${window.location.origin}/?redirect=false` });
      });

    } catch (error) {
      console.error('Error during sign-out:', error);
      // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
    }//daliaRojas@gmail.com ... R0jas#we3
  };

  return (
    <div className="flex w-full items-center space-x-2">
      {session ? (
        <Button
          aria-label="Log out"
          size="sm"
          className="w-full"
          onClick={handleSignOut}
          disabled={isPending}
        >
          {isPending && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Cerrar sesion
        </Button>
      ) : (
        <Skeleton
        className={cn(
          buttonVariants({ size: "sm" }),
          "w-full bg-muted text-muted-foreground"
        )}
        >
          Cerrar sesion
        </Skeleton>
      )}
      <Button
        aria-label="Go back to the previous page"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => router.back()}
        disabled={isPending}
      >
        Regresar
      </Button>
    </div>
  );
}