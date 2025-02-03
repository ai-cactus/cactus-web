import { useMutation, useQuery } from "@tanstack/react-query";
import keys from "./keys";
import api from "../api";
import { DocumentResponse } from "@/lib/types";
import { AnalyzeDocumentPayload } from "./types";

const BASE_URL = "/documents";
export const useGetDocuments = () => {
  const hash = [keys.read];
  const { data, isLoading, isPending, error } = useQuery({
    queryKey: hash,
    queryFn: async () => await api.get({ url: BASE_URL, auth: true }),
  });
  return {
    data: data as unknown as DocumentResponse[],
    isLoading,
    isPending,
    error,
  };
};

export const useAnalyzeDocuments = () => {
  const response = useMutation({
    mutationFn: (payload: AnalyzeDocumentPayload) => {
      return api.post({ url: `${BASE_URL}/pages/analyze`, body: payload });
    },
  });
  return response;
};
