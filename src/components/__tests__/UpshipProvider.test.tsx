import React from 'react';
import { render } from '@testing-library/react';
import { UpshipProvider } from '../UpshipProvider';

describe('UpshipProvider', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <UpshipProvider apiKey="test-api-key">
        <div>Test Child</div>
      </UpshipProvider>,
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });
});
