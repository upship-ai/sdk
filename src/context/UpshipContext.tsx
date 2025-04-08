import React, { createContext, useContext, useEffect, useState } from 'react';
import { UpshipContextType, UpshipProviderProps, UpshipUser } from '../types';

// Create context with a default value
const UpshipContext = createContext<UpshipContextType | undefined>(undefined);

export const UpshipContextProvider: React.FC<UpshipProviderProps> = ({ children, apiKey }) => {
  const [user, setUser] = useState<UpshipUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      try {
        // This would be replaced with actual API call to check authentication
        const storedUser = localStorage.getItem('upship_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [apiKey]);

  const signIn = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // This would be replaced with actual authentication logic
      // For now, we'll simulate a successful login
      const mockUser: UpshipUser = {
        id: 'user-123',
        email: 'user@example.com',
        name: 'Test User',
      };

      setUser(mockUser);
      localStorage.setItem('upship_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // This would be replaced with actual sign out logic
      setUser(null);
      localStorage.removeItem('upship_user');
    } catch (error) {
      console.error('Sign out failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    signIn,
    signOut,
  };

  return <UpshipContext.Provider value={value}>{children}</UpshipContext.Provider>;
};

export const useUpship = (): UpshipContextType => {
  const context = useContext(UpshipContext);
  if (context === undefined) {
    throw new Error('useUpship must be used within an UpshipProvider');
  }
  return context;
};
