
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'User' | 'Admin';
  createdDate: string;
  status: 'Active' | 'Inactive';
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}
