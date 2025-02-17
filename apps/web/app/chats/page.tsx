"use client";

import { useConvexAuth } from "convex/react";
import { SignIn, useUser } from "@clerk/nextjs";
import ClientChats from "../../components/chats/client-chats";

export default function Page(): JSX.Element {
  const { user } = useUser();
  const { isAuthenticated } = useConvexAuth();
  return (
    <div className="flex h-[100vh] w-full flex-col justify-self-start lg:pr-6">
      {isAuthenticated && user ? (
        <ClientChats />
      ) : (
        <div className="flex h-full w-full items-start justify-center py-32">
          {!user && <SignIn />}
        </div>
      )}
    </div>
  );
}
