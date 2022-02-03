export const ROLES_KEY = 'roles'

  export interface CreateUsers {
  email: string;
  password: string
}

export interface CreateRoles {
  roles: string;
  description: string;
}