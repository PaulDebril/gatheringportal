export async function updateUser(data: { username: string; email: string }) {
    const response = await fetch('/api/user/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
  
    if (!response.ok) {
      throw new Error(result.error || 'Erreur lors de la mise à jour de l’utilisateur');
    }
  
    return result;
  }