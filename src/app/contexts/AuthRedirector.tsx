"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './AuthContext'; // Adjust the import path as necessary

const AuthRedirector = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/chat');  // Redirect to the chat page if authenticated
    } else {
      router.push('/register');  // Redirect to the register page if not authenticated
    }
  }, [isAuthenticated, router]);

  return <>{children}</>; // Render children if needed
};

export default AuthRedirector;
