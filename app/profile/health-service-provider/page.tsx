'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HealthServiceProviderProfile() {
  const router = useRouter();

  // Redirect to the first step
  useEffect(() => {
    router.push('/profile/health-service-provider/steps?step=1');
  }, [router]);

  return null;
}
