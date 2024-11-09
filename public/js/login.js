// DOM elements
const form = document.getElementById('form');
const searchButton = document.getElementById('searchButton');
const alert = document.getElementById('alert');
const alertMessage = document.getElementById('error-message');
const generalAlert = document.getElementById('general-alert');
const generalAlertMessage = document.getElementById('general-alert-message');

// Get possible errors
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

if (params.error) {
  switch (params.error) {
    case 'invalid_token':
      generalAlert.classList.remove('hidden');
      generalAlertMessage.textContent = 'Token inválida - Por favor inicia sesión de nuevo';
      break;
    case 'session_expired':
      generalAlert.classList.remove('hidden');
      generalAlertMessage.textContent = 'Sesión expirada - Por favor inicia sesión de nuevo';
      break;
    default:
      break;
  }
}

// Form validations
const pristine = new Pristine(form);

pristine.addValidator(
  document.getElementById('password'),
  (value) => {
    const regex = /^.{6,20}$/;
    return regex.test(value);
  },
  'Error: Debe tener entre 6 y 20 caracteres',
);

pristine.addValidator(
  document.getElementById('userDocument'),
  (value) => {
    const regex = /^[0-9]{7,8}$/;
    return regex.test(value);
  },
  'Error: Debe ser un n° de documento válido',
);

// Events
generalAlert.addEventListener('hidden', () => {
  window.history.pushState({}, document.title, window.location.pathname);
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!pristine.validate()) return;

  const data = new FormData(event.target);
  const object = Object.fromEntries(data.entries());

  try {
    searchButton.disabled = true;
    searchButton.textContent = 'Iniciando sesión...';
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    }).finally(() => {
      searchButton.disabled = false;
      searchButton.textContent = 'Iniciar sesión';
    });

    const data = await response.json();

    if (data.status) return (window.location.href = data.body.redirectUrl);

    alert.classList.remove('hidden');
    alertMessage.textContent = data.message;
  } catch (error) {
    console.error('Error:', error);
  }
});
