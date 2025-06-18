import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the health service provider onboarding flow
  redirect('/profile/health-service-provider');
  return null;
}
