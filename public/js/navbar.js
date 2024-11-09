import { customFetch } from './custom-fetch.js';

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', async () => {
  const response = await customFetch('/api/auth/logout', {
    method: 'POST',
  });
  const data = await response.json();

  if (data.status) window.location.href = '/';
});
