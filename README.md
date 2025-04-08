# @upship.ai/sdk

A TypeScript SDK for upship.ai with React components for authentication.

## Installation

```bash
npm install @upship.ai/sdk
# or
yarn add @upship.ai/sdk
```

## Usage

```jsx
import { 
  UpshipProvider, 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  SignOutButton 
} from '@upship.ai/sdk';

function App() {
  return (
    <UpshipProvider apiKey="your-api-key">
      <SignedIn>
        <p>You are signed in!</p>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
      <SignedOut>
        <p>Please sign in</p>
        <SignInButton>Login</SignInButton>
      </SignedOut>
    </UpshipProvider>
  );
}
```

## Components

### UpshipProvider

Provides authentication context to all child components.

```jsx
<UpshipProvider apiKey="your-api-key" redirectUrl="optional-redirect-url">
  {/* Your app */}
</UpshipProvider>
```

### SignedIn

Renders its children only when the user is authenticated.

```jsx
<SignedIn>
  <p>This content is only visible when signed in</p>
</SignedIn>
```

### SignedOut

Renders its children only when the user is not authenticated.

```jsx
<SignedOut>
  <p>This content is only visible when signed out</p>
</SignedOut>
```

### SignInButton

A button that triggers the sign-in flow.

```jsx
<SignInButton className="custom-button">Login</SignInButton>
```

### SignOutButton

A button that triggers the sign-out flow.

```jsx
<SignOutButton className="custom-button">Logout</SignOutButton>
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the package
npm run build

# Lint code
npm run lint

# Format code
npm run format
```
