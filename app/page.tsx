import { redirect } from 'next/navigation';
import { AppRoutes } from '@/utils/routes';

export default function Home() {
  redirect(AppRoutes.auth.login.path);
  return null;
}
