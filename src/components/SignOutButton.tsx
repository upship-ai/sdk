import React, { ReactNode } from 'react';
import { useUpship } from '../context/UpshipContext';

interface SignOutButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const SignOutButton: React.FC<SignOutButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  const { signOut, isLoading } = useUpship();

  const handleClick = async () => {
    try {
      await signOut();
      if (onClick) onClick();
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading} className={className}>
      {children || 'Sign Out'}
    </button>
  );
};
