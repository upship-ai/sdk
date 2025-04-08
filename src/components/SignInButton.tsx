import React, { ReactNode } from 'react';
import { useUpship } from '../context/UpshipContext';

interface SignInButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const SignInButton: React.FC<SignInButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  const { signIn, isLoading } = useUpship();

  const handleClick = async () => {
    try {
      await signIn();
      if (onClick) onClick();
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading} className={className}>
      {children || 'Sign In'}
    </button>
  );
};
