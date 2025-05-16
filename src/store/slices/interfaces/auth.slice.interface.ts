export interface UserDetails {
  id: string;
  name: string;
  email: string;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  userDetails: UserDetails | null;
  token: Token | null;
}
