'use client';

import { useRouter } from 'next/navigation';
import { OnboardingHeader } from '@/components/onboarding/OnboardingHeader';
import { useOnboarding } from './steps/context';
import Step1BasicInfo from './steps/step1-basic-info';
import Step2ContactInfo from './steps/step2-contact-info';
import Step3Address from './steps/step3-address';
import Step4Services from './steps/step4-services';

const steps = [
  { id: '1', name: 'Practice Info', component: Step1BasicInfo },
  { id: '2', name: 'Contact', component: Step2ContactInfo },
  { id: '3', name: 'Address', component: Step3Address },
  { id: '4', name: 'Services', component: Step4Services },
];

function OnboardingWizard() {
  const { currentStep, prevStep, nextStep, formData } = useOnboarding();
  const router = useRouter();

  const CurrentStepComponent = steps[currentStep - 1]?.component;
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 pt-8 pb-16 md:pb-24">
      <OnboardingHeader />
      <div className="w-full max-w-4xl">
        {/* Current Step Content */}
        {CurrentStepComponent && <CurrentStepComponent />}
      </div>
    </div>
  );
}

export default OnboardingWizard;
