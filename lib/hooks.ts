import { useState, useCallback } from "react";
import { useAuthState } from "./authState";
import { StatusType } from "./types";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const useFetch = <DATA = any, ERROR = any>(input: string) => {
    const { auth, loading: authLoading } = useAuthState();
    const [data, setData] = useState<DATA | null>(null);
    const [error, setError] = useState<ERROR | null>(null);
    const [status, setStatus] = useState<StatusType>("idle");

    const go = useCallback(async (init?: RequestInit) => {
        if (auth.user === null || authLoading) return; // Prevent fetching until auth state is loaded.

        setStatus("loading");
        setError(null);

        try {
            const response = await fetch(BASE_URL + input, {
                ...init,
                headers: {
                    ...init?.headers,
                    // @ts-ignore
                    authorization: `Bearer ${await user?.accessToken}`,
                },
            });
            console.log(response.status)
            if (!response.ok) {
                const errorText = await response.text();
                setError(errorText as ERROR);
                setStatus("error");
                return;
            }

            const result = await response.json();
            setData(result);
            setStatus("success");
        } catch (fetchError) {
            setError(((fetchError as Error).message) as ERROR);
            setStatus("error");
        }
    }, [auth.user, authLoading, input]);

    return { data, error, status, go };
};
