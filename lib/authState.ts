// lib/authState.js
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth as firebaseAuth } from "./firebase";
import { Profile } from "./types";
import { BASE_URL } from "./hooks";

export const useAuthState = () => {
  const [auth, setAuth] = useState<{user: User | null, profile: Profile | null}>({user: null, profile: null});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      try {
        // @ts-ignore
        console.log("User is loading", user, user.accessToken);
        setAuth((prev) => ({...prev, user: user}));
        setLoading(false);
        const response = await fetch('http://localhost:3000/auth/profile', {
          method: "PATCH",
          body: JSON.stringify({}),
          headers: {
            // @ts-ignore
            authorization: `Bearer ${user.accessToken}`,
          },
        });
        console.log("User is loaded", user);
        console.log("profile", response.clone());
        const profile = await response.json() as Profile;
        setAuth(prev => ({...prev, profile: profile}));
      } catch (error) {
        // handle error
        console.log("Error", error);
      }
    });
    return () => unsubscribe();
  }, []);

  return { auth, loading };
};