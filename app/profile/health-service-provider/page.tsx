'use client';

import { OnboardingProvider } from './steps/context';
import OnboardingFlow from './onboarding-flow';

export default function HealthServiceProviderProfile() {
  return (
    <OnboardingProvider>
      <OnboardingFlow />
    </OnboardingProvider>
  );
}
