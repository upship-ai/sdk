import { ReactNode } from 'react';

export interface UpshipUser {
  id: string;
  email: string;
  name?: string;
  // Add other user properties as needed
}

// AppId or ApiKey is required
export interface UpshipProviderProps {
  children: ReactNode;
  appId?: string;
  apiKey?: string;
  redirectUrl?: string;
}

export interface UpshipContextType {
  user: UpshipUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}
