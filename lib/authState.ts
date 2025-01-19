// lib/authState.js
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth as firebaseAuth } from "./firebase";
import { Profile } from "./types";
import { BASE_URL } from "./hooks";

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const auth = { user, profile };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      try {
        console.log("User is loading", user);
        setUser(user);
        setLoading(false);
        const response = await fetch('http://localhost:3000/auth/profile', {
          method: "PATCH",
          body: JSON.stringify({}),
          headers: {
            // @ts-ignore
            authorization: `Bearer ${await user?.accessToken}`,
          },
        });
        console.log("User is loaded", user);
        console.log("profile", response);
        setProfile(response.json() as Profile);
      } catch (error) {
        // handle error
      }
    });
    return () => unsubscribe();
  }, []);

  return { auth, loading };
};