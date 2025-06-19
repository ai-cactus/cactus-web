'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type OnboardingData = {
  // Step 1: Basic Information
  practiceName: string;
  practiceType: string;
  npiNumber: string;
  taxId: string;
  
  // Step 2: Organization Information
  legalBusinessName: string;
  doingBusinessAs: string;
  ein: string;
  businessType: string;
  primaryAddress: string;
  numberOfStaff: string;
  stateLicenseNumber: string;
  hipaaCompliance: string;
  primaryContactName: string;
  primaryContactEmail: string;
  
  // Step 3: Contact Information
  email: string;
  phone: string;
  website: string;
  
  // Step 4: Address
  streetAddress: string;
  aptSuite: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Step 5: Services
  services: string[];
  
  // Step 6: Team Members
  teamMembers: Array<{
    email: string;
    position: string;
    permission: string;
  }>;
  
  // Step 7: Final Review
  termsAccepted: boolean;
  
  // Step 8: Plan Selection
  plan: string | null;
};

type OnboardingContextType = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  markAllStepsCompleted: () => void;
};

const defaultFormData: OnboardingData = {
  // Step 1
  practiceName: '',
  practiceType: '',
  npiNumber: '',
  taxId: '',
  
  // Step 2
  legalBusinessName: '',
  doingBusinessAs: '',
  ein: '',
  businessType: '',
  primaryAddress: '',
  numberOfStaff: '0',
  stateLicenseNumber: '',
  hipaaCompliance: 'No',
  primaryContactName: '',
  primaryContactEmail: '',
  
  // Step 3
  email: '',
  phone: '',
  website: '',
  
  // Step 4
  streetAddress: '',
  aptSuite: '',
  city: '',
  state: '',
  zipCode: '',
  
  // Step 5
  services: [],
  
  // Step 6
  teamMembers: [],
  
  // Step 7
  termsAccepted: false,
  
  // Step 8
  plan: null
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  // Track if we're in the onboarding flow
  const isOnboarding = typeof window !== 'undefined' && window.location.pathname.includes('/profile/health-service-provider/steps');
  const router = useRouter();
  
  // Load step from localStorage if available, otherwise default to 1
  const [currentStep, setCurrentStep] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const savedStep = localStorage.getItem('onboardingStep');
      return savedStep ? parseInt(savedStep, 10) : 1;
    }
    return 1;
  });
  
  const [formData, setFormData] = useState<OnboardingData>(() => {
    if (typeof window !== 'undefined') {
      // Only load saved data if we're in the onboarding flow
      if (isOnboarding) {
        const savedData = localStorage.getItem('onboardingFormData');
        return savedData ? JSON.parse(savedData) : defaultFormData;
      }
      // Clear data if not in onboarding
      localStorage.removeItem('onboardingFormData');
      localStorage.removeItem('onboardingStep');
    }
    return defaultFormData;
  });

  // Save step to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && isOnboarding) {
      localStorage.setItem('onboardingStep', currentStep.toString());
    }
  }, [currentStep, isOnboarding]);

  // Save form data to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && isOnboarding) {
      localStorage.setItem('onboardingFormData', JSON.stringify(formData));
    }
  }, [formData, isOnboarding]);
  
  // Clear form data when component unmounts or when leaving the onboarding flow
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isOnboarding) {
        localStorage.removeItem('onboardingFormData');
        localStorage.removeItem('onboardingStep');
      }
    };
    
    // Set up event listener for page unload
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Clean up
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (isOnboarding) {
        localStorage.removeItem('onboardingFormData');
        localStorage.removeItem('onboardingStep');
      }
    };
  }, [isOnboarding]);

  const updateFormData = (data: Partial<OnboardingData>) => {
    setFormData(prev => {
      const newData = { ...prev, ...data };
      return newData;
    });
  };

  const markAllStepsCompleted = () => {
    // Mark all steps as completed in localStorage
    if (typeof window !== 'undefined') {
      const completedSteps = {
        organization: true,
        team: true,
        plan: true
      };
      localStorage.setItem('completedSteps', JSON.stringify(completedSteps));
    }
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    }
    
    // If this is the last step, mark all as completed
    if (currentStep === 4) {
      markAllStepsCompleted();
      router.push('/profile/health-service-provider/steps?step=1');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const contextValue = {
    currentStep,
    setCurrentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    markAllStepsCompleted,
  };

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = (): OnboardingContextType => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
