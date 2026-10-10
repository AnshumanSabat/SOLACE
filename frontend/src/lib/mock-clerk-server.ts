import { NextResponse } from 'next/server';

export const mockUser = {
  id: 'user_mock_123',
  fullName: 'Demo User',
  primaryEmailAddress: { emailAddress: 'user@example.com' },
  unsafeMetadata: {
    isAdmin: true,
  },
};

export async function currentUser() {
  return mockUser;
}

export async function auth() {
  return {
    userId: mockUser.id,
    sessionId: 'session_mock_123',
  };
}

export function clerkMiddleware() {
  return () => {
    return NextResponse.next();
  };
}
