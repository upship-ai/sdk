import React from 'react';
import { UpshipContextProvider } from '../context/UpshipContext';
import { UpshipProviderProps } from '../types';

export const UpshipProvider: React.FC<UpshipProviderProps> = ({
  children,
  apiKey,
  redirectUrl,
}) => {
  return (
    <UpshipContextProvider apiKey={apiKey} redirectUrl={redirectUrl}>
      {children}
    </UpshipContextProvider>
  );
};
