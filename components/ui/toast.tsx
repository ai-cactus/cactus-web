'use client';

import { Toaster as HotToaster, toast as hotToast } from 'react-hot-toast';
import { X, Check } from 'lucide-react';

const SuccessToast = ({ message, onClose }: { message: React.ReactNode; onClose: () => void }) => (
  <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md w-full animate-in slide-in-from-top duration-300">
    <button 
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
    >
      <X size={20} />
    </button>
    
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <Check size={16} className="text-white stroke-[2.5]" />
        </div>
      </div>
      
      <div className="flex-1 pt-1 pr-2">
        <h3 className="text-xl font-semibold text-blue-600 mb-2 leading-tight">
          Organization Account is Set Up!
        </h3>
        <p className="text-gray-500 text-base leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  </div>
);

export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        className: '!p-4 !bg-transparent !shadow-none',
        style: {
          top: '1rem',
          right: '1rem',
          left: 'auto',
          transform: 'none',
          animation: 'slideInRight 0.3s ease-out',
        },
      }}
    >
      {(t) => {
        const message = typeof t.message === 'function' ? t.message(t) : t.message;
        
        return (
          <SuccessToast 
            message={message} 
            onClose={() => hotToast.dismiss(t.id)} 
          />
        );
      }}
    </HotToaster>
  );
}

// Helper functions for different toast types
export const toast = {
  success: (message: string) => {
    return hotToast.success(message);
  },
  error: (message: string) => {
    return hotToast.error(message);
  },
  loading: (message: string) => {
    return hotToast.loading(message);
  },
  dismiss: (toastId?: string) => {
    return hotToast.dismiss(toastId);
  },
  promise: <T,>(
    promise: Promise<T>,
    msgs: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: Error) => string);
    }
  ) => {
    return hotToast.promise(promise, msgs);
  },
};

// Add animations to global styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
    
    .slide-in-from-top {
      animation: slideInRight 0.3s ease-out forwards;
    }
    
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}
