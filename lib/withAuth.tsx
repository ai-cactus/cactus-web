'use client'

import React, { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from './authState';
import Image from 'next/image';
import { LoadingModal } from '@/components/modals';

interface WithAuthProps {
  // Define any additional props that withAuth might inject
}

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P & WithAuthProps> => {
  const ComponentWithAuth = (props: P) => {
    const { auth, loading } = useAuthState();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !auth.user) {
        router.push('/login');
      }
    }, [loading, auth.user, router]);

    if (loading) return <LoadingModal />;
    return auth.user ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
};

export default withAuth;