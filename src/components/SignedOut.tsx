import React, { ReactNode } from 'react';
import { useUpship } from '../context/UpshipContext';

interface SignedOutProps {
  children: ReactNode;
}

export const SignedOut: React.FC<SignedOutProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useUpship();

  if (isLoading) {
    return null;
  }

  return !isAuthenticated ? <>{children}</> : null;
};
