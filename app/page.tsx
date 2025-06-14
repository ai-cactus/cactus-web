import { redirect } from 'next/navigation';
import { AppRoutes } from '@/utils/routes';

export default function Home() {
  redirect(AppRoutes.main.dashboard.path);
  // redirect(AppRoutes.auth.login.path);
  return null;
}
