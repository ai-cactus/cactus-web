import { toast as hotToast } from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'loading' | 'blank';

export const toast = {
  success: (message: string, options = {}) => {
    return hotToast.success(message, {
      duration: 4000,
      ...options,
    });
  },
  error: (message: string, options = {}) => {
    return hotToast.error(message, {
      duration: 5000,
      ...options,
    });
  },
  loading: (message: string, options = {}) => {
    return hotToast.loading(message, {
      duration: 3000,
      ...options,
    });
  },
  dismiss: (toastId?: string) => {
    return hotToast.dismiss(toastId);
  },
  promise: <T,>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: Error) => string);
    },
    options = {}
  ) => {
    return hotToast.promise(
      promise,
      {
        loading: messages.loading,
        success: (data) => {
          return typeof messages.success === 'function' 
            ? messages.success(data) 
            : messages.success;
        },
        error: (error) => {
          return typeof messages.error === 'function'
            ? messages.error(error)
            : messages.error;
        },
      },
      {
        ...options,
        success: {
          duration: 4000,
          ...(options as any).success,
        },
        error: {
          duration: 5000,
          ...(options as any).error,
        },
      }
    );
  },
};
