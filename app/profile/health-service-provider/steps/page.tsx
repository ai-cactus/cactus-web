'use client';

import { Suspense } from 'react';
import { OnboardingProvider } from './context';
import OnboardingFlow from '../onboarding-flow';

export default function OnboardingStepsPage() {
  return (
    <OnboardingProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <OnboardingFlow />
      </Suspense>
    </OnboardingProvider>
  );
}
