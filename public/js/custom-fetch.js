export async function customFetch(url, options = {}) {
  const response = await fetch(url, options);

  // Si la respuesta es 401 (no autorizado), intenta renovar el token
  if (response.status === 401 && !options._retry) {
    options._retry = true;

    const refreshResponse = await fetch('/api/auth/refresh-token', {
      method: 'POST',
      credentials: 'include',
    });

    if (refreshResponse.ok) {
      console.info('Token refrescado correctamente');
      return await customFetch(url, options);
    } else {
      window.location.href = data.redirectUrl;
      throw new Error('Sesion expirada');
    }
  }

  return response;
}
