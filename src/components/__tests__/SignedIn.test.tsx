import React from 'react';
import { render } from '@testing-library/react';
import { SignedIn } from '../SignedIn';
import { useUpship } from '../../context/UpshipContext';

// Mock the useUpship hook
jest.mock('../../context/UpshipContext');

describe('SignedIn', () => {
  it('renders children when user is authenticated', () => {
    (useUpship as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
    });

    const { getByText } = render(
      <SignedIn>
        <div>Authenticated Content</div>
      </SignedIn>,
    );

    expect(getByText('Authenticated Content')).toBeInTheDocument();
  });

  it('does not render children when user is not authenticated', () => {
    (useUpship as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
    });

    const { queryByText } = render(
      <SignedIn>
        <div>Authenticated Content</div>
      </SignedIn>,
    );

    expect(queryByText('Authenticated Content')).not.toBeInTheDocument();
  });

  it('does not render children when loading', () => {
    (useUpship as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      isLoading: true,
    });

    const { queryByText } = render(
      <SignedIn>
        <div>Authenticated Content</div>
      </SignedIn>,
    );

    expect(queryByText('Authenticated Content')).not.toBeInTheDocument();
  });
});
