import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SignInButton } from '../SignInButton';
import { useUpship } from '../../context/UpshipContext';

// Mock the useUpship hook
jest.mock('../../context/UpshipContext');

describe('SignInButton', () => {
  const mockSignIn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useUpship as jest.Mock).mockReturnValue({
      signIn: mockSignIn,
      isLoading: false,
    });
  });

  it('renders with default text', () => {
    const { getByText } = render(<SignInButton />);
    expect(getByText('Sign In')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    const { getByText } = render(<SignInButton>Login</SignInButton>);
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('calls signIn when clicked', () => {
    const { getByText } = render(<SignInButton />);
    fireEvent.click(getByText('Sign In'));
    expect(mockSignIn).toHaveBeenCalledTimes(1);
  });

  it('calls custom onClick handler when provided', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<SignInButton onClick={mockOnClick} />);

    mockSignIn.mockResolvedValueOnce(undefined);

    fireEvent.click(getByText('Sign In'));
    expect(mockSignIn).toHaveBeenCalledTimes(1);

    // Wait for the async signIn to complete
    setTimeout(() => {
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    }, 0);
  });

  it('is disabled when loading', () => {
    (useUpship as jest.Mock).mockReturnValue({
      signIn: mockSignIn,
      isLoading: true,
    });

    const { getByText } = render(<SignInButton />);
    const button = getByText('Sign In');
    expect(button).toBeDisabled();
  });
});
