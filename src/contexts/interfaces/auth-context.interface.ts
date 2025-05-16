import { ReactNode } from 'react';

export interface UserDetails {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  auth: UserDetails | null;
}

export interface AuthProviderProps {
  children: ReactNode;
}
