'use client';

import { useEffect, ReactNode } from 'react';
import { Toaster as HotToaster, toast as hotToast, type Toast } from 'react-hot-toast';
import { X, Check, Loader2, AlertTriangle, Info } from 'lucide-react';

declare global {
  interface Window {
    toast: typeof hotToast;
  }
}

// Add animations to global styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    .toast-enter {
      animation: slideInRight 0.3s ease-out forwards;
    }
  `;
  document.head.appendChild(style);
}

const ToastIcon = ({ type }: { type: Toast['type'] }) => {
  switch (type) {
    case 'success':
      return (
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Check size={16} className="text-white stroke-[2.5]" />
          </div>
        </div>
      );
    case 'error':
      return (
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow-sm">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <X size={16} className="text-white stroke-[2.5]" />
          </div>
        </div>
      );
    case 'loading':
      return (
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
          <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
        </div>
      );
    case 'blank':
    default:
      return (
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
          <Info size={20} className="text-gray-600" />
        </div>
      );
  }
};

export function ToastProvider() {
  useEffect(() => {
    // Make toast available globally
    window.toast = hotToast;
  }, []);

  const renderToast = (t: Toast) => {
    let message: ReactNode;
    
    if (typeof t.message === 'function') {
      message = t.message(t);
    } else {
      message = t.message as ReactNode;
    }

    // Get title based on toast type
    const getTitle = () => {
      if (t.type === 'success') return 'Organization Account is Set Up!';
      if (t.type === 'error') return 'Error';
      if (t.type === 'loading') return 'Loading...';
      return 'Notification';
    };

    return (
      <div 
        className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md w-full toast-enter ${t.visible ? 'animate-enter' : 'animate-leave'}`}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <ToastIcon type={t.type} />
          </div>
          
          <div className="flex-1 pt-1 pr-2">
            <h3 className="text-xl font-semibold text-blue-600 mb-2 leading-tight">
              {getTitle()}
            </h3>
            <p className="text-gray-500 text-base leading-relaxed">
              {message}
            </p>
          </div>

          <button 
            onClick={() => hotToast.dismiss(t.id)}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        className: '!p-0 !m-0 !bg-transparent !shadow-none !max-w-none',
        style: {
          top: '1.5rem',
          right: '1.5rem',
          left: 'auto',
          transform: 'none',
          animation: 'none',
        },
      }}
    >
      {renderToast}
    </HotToaster>
  );
}
