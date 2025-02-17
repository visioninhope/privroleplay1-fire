import { useUser } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

export default function useStoreUserEffect() {
  const { isAuthenticated } = useConvexAuth();
  const { user } = useUser();
// When this state is set we know the server
// has stored the user.
  const [userId, setUserId] = useState<Id<"users"> | null>(null);
  const storeUser = useMutation(api.users.store);
  // Call the `storeUser` mutation function to store
  // the current user in the `users` table and return the `Id` value.
  useEffect(() => {
    // If the user is not logged in don't do anything
    if (!isAuthenticated || !user) {
      return;
    }
    // Store the user in the database.
    // Recall that `storeUser` gets the user information via the `auth`
    // object on the server. You don't need to pass anything manually here.
    async function createUser() {

      if (!user) return;
      console.log("User object:", user);
      console.log("Username:", user.username);
      console.log("User ID:", user.id);

      if (!user.username) {
        console.warn("Username is not available. Using user ID as fallback.");
      }

      const username = user.username || `user_${user.id}`;

      try {
        const id = await storeUser({ username });
        console.log("User stored successfully with ID:", id);
        setUserId(id);
      } catch (error) {
        console.error("Error storing user:", error);
      }
    }

    createUser();
    return () => setUserId(null);
    // Make sure the effect reruns if the user logs in with
    // a different identity
  }, [isAuthenticated, storeUser, user]);

  return userId;
}
