'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

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
};

type OnboardingContextType = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
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
  termsAccepted: false
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>(defaultFormData);

  const updateFormData = (data: Partial<OnboardingData>) => {
    setFormData(prev => ({
      ...prev,
      ...data,
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        updateFormData,
        nextStep,
        prevStep,
      }}
    >
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
