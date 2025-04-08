import React from 'react';
import { render } from '@testing-library/react';
import { SignedOut } from '../SignedOut';
import { useUpship } from '../../context/UpshipContext';

// Mock the useUpship hook
jest.mock('../../context/UpshipContext');

describe('SignedOut', () => {
  it('renders children when user is not authenticated', () => {
    (useUpship as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
    });

    const { getByText } = render(
      <SignedOut>
        <div>Unauthenticated Content</div>
      </SignedOut>,
    );

    expect(getByText('Unauthenticated Content')).toBeInTheDocument();
  });

  it('does not render children when user is authenticated', () => {
    (useUpship as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
    });

    const { queryByText } = render(
      <SignedOut>
        <div>Unauthenticated Content</div>
      </SignedOut>,
    );

    expect(queryByText('Unauthenticated Content')).not.toBeInTheDocument();
  });

  it('does not render children when loading', () => {
    (useUpship as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      isLoading: true,
    });

    const { queryByText } = render(
      <SignedOut>
        <div>Unauthenticated Content</div>
      </SignedOut>,
    );

    expect(queryByText('Unauthenticated Content')).not.toBeInTheDocument();
  });
});
