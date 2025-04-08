import React, { ReactNode } from 'react';
import { useUpship } from '../context/UpshipContext';

interface SignedInProps {
  children: ReactNode;
}

export const SignedIn: React.FC<SignedInProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useUpship();

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? <>{children}</> : null;
};
