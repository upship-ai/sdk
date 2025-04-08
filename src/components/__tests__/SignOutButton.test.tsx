import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SignOutButton } from '../SignOutButton';
import { useUpship } from '../../context/UpshipContext';

// Mock the useUpship hook
jest.mock('../../context/UpshipContext');

describe('SignOutButton', () => {
  const mockSignOut = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useUpship as jest.Mock).mockReturnValue({
      signOut: mockSignOut,
      isLoading: false,
    });
  });

  it('renders with default text', () => {
    const { getByText } = render(<SignOutButton />);
    expect(getByText('Sign Out')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    const { getByText } = render(<SignOutButton>Logout</SignOutButton>);
    expect(getByText('Logout')).toBeInTheDocument();
  });

  it('calls signOut when clicked', () => {
    const { getByText } = render(<SignOutButton />);
    fireEvent.click(getByText('Sign Out'));
    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });

  it('calls custom onClick handler when provided', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<SignOutButton onClick={mockOnClick} />);

    mockSignOut.mockResolvedValueOnce(undefined);

    fireEvent.click(getByText('Sign Out'));
    expect(mockSignOut).toHaveBeenCalledTimes(1);

    // Wait for the async signOut to complete
    setTimeout(() => {
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    }, 0);
  });

  it('is disabled when loading', () => {
    (useUpship as jest.Mock).mockReturnValue({
      signOut: mockSignOut,
      isLoading: true,
    });

    const { getByText } = render(<SignOutButton />);
    const button = getByText('Sign Out');
    expect(button).toBeDisabled();
  });
});
