// src/app/services/AuthService.ts

interface AuthData {
    username?: string;
    email: string;
    phone?: string;
    password: string;
    confirmPassword?: string;
  }
  
  /**
   * Effectue la requête d'inscription
   */
  export async function signup(data: AuthData) {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
  
    if (!response.ok) {
      throw new Error(result.error || 'Une erreur est survenue lors de la création de compte');
    }
    return result;
  }
  
  /**
   * Effectue la requête de connexion
   */
  export async function login(data: AuthData) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
  
    if (!response.ok) {
      throw new Error(result.error || 'Une erreur est survenue lors de la connexion');
    }
    return result;
  }