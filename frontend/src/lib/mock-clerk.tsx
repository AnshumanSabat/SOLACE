'use client';
import React from 'react';

export const mockUser = {
  id: 'user_mock_123',
  fullName: 'Demo User',
  primaryEmailAddress: { emailAddress: 'user@example.com' },
  unsafeMetadata: {
    isAdmin: true,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ClerkProvider({ children }: { children: React.ReactNode; [key: string]: any }) {
  return <>{children}</>;
}

export function useClerk() {
  return {
    user: mockUser,
    signOut: () => Promise.resolve(),
    openSignIn: () => {},
  };
}

export function useUser() {
  return {
    isSignedIn: true,
    isLoaded: true,
    user: mockUser,
  };
}

export function useAuth() {
  return {
    isLoaded: true,
    isSignedIn: true,
    userId: mockUser.id,
    sessionId: 'session_mock_123',
    signOut: () => Promise.resolve(),
  };
}

export function useSignIn() {
  return {
    isLoaded: true,
    signIn: {
      create: async () => ({ status: 'complete', createdSessionId: 'sess_123' }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      authenticateWithRedirect: async (_opts?: any) => {},
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setActive: async (_opts?: any) => {},
  };
}

export function useSignUp() {
  return {
    isLoaded: true,
    signUp: {
      create: async () => ({ status: 'complete', createdSessionId: 'sess_123' }),
      prepareEmailAddressVerification: async () => {},
      attemptEmailAddressVerification: async () => ({ status: 'complete', createdSessionId: 'sess_123' }),
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setActive: async (_opts?: any) => {},
  };
}

export function SignInButton({ children }: { children?: React.ReactNode }) {
  return <>{children || <button>Sign In</button>}</>;
}

export function SignOutButton({ children }: { children?: React.ReactNode }) {
  return <>{children || <button>Sign Out</button>}</>;
}

export function SignIn() {
  return <div className="p-4 border rounded text-center">Sign In (Frontend Demo Mode)</div>;
}

export function SignUp() {
  return <div className="p-4 border rounded text-center">Sign Up (Frontend Demo Mode)</div>;
}

export function AuthenticateWithRedirectCallback() {
  return <div>Redirecting...</div>;
}
