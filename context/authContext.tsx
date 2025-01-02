'use client';

import React, { createContext, useEffect, useState, ReactNode } from "react";
import {jwtDecode} from "jwt-decode"; // Corrected import for jwt-decode

// Define the shape of the context with roles included
interface TokenPayload {
  roles?: string;  // Add roles and any other fields here based on your JWT payload
  // Add other fields from your JWT payload if needed
}

interface ContextProps {
  token: TokenPayload | null; // Store the decoded token payload
  setToken: (token: TokenPayload | null) => void; // Setter function
}

// Default context value with null token
const defaultContext: ContextProps = {
  token: null,
  setToken: () => {}, // No-op function as default
};

// Create the authContext with the default value
export const authContext = createContext<ContextProps>(defaultContext);

// Props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode; // ReactNode type allows children elements
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<TokenPayload | null>(null);

  useEffect(() => {
    // Retrieve token from localStorage and decode it
    const storedToken = localStorage.getItem("tkn");
    if (storedToken) {
      try {
        const decodedToken: TokenPayload = jwtDecode(storedToken); // Decode the token and extract payload
        setToken(decodedToken);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  return (
    <authContext.Provider value={{ token, setToken }}>
      {children}
    </authContext.Provider>
  );
}
