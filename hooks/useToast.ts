import { useCallback } from 'react';
import { toast } from '../lib/toast';

export const useToast = () => {
  const showSuccess = useCallback((message: string) => {
    toast.success(message);
  }, []);

  const showError = useCallback((message: string) => {
    toast.error(message);
  }, []);

  const showLoading = useCallback((message: string) => {
    return toast.loading(message);
  }, []);

  const dismissToast = useCallback((toastId?: string) => {
    toast.dismiss(toastId);
  }, []);

  const promiseToast = useCallback(<T,>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: Error) => string);
    },
    options = {}
  ) => {
    return toast.promise(promise, messages, options);
  }, []);

  return {
    showSuccess,
    showError,
    showLoading,
    dismissToast,
    promiseToast,
  };
};
