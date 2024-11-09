const form = document.getElementById('form');

success = JSON.parse(success);
error = JSON.parse(error);
message = JSON.parse(message);

if (success) {
  Toastify({
    text: message,
    duration: 4000,
    close: true,
    gravity: 'bottom',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: 'linear-gradient(to right, #05b016, #0be08b)',
    },
    onClick: function () {},
  }).showToast();
}

if (error) {
  Toastify({
    text: message,
    duration: 4000,
    close: true,
    gravity: 'bottom',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: 'linear-gradient(to right, #b00505, #e00b0b)',
    },
    onClick: function () {},
  }).showToast();
}

// Form validations
const pristine = new Pristine(form);

pristine.addValidator(
  document.getElementById('patientDocument'),
  (value) => {
    const regex = /^[0-9]{7,8}$/;
    return regex.test(value);
  },
  'Error: Debe ser un n° de documento válido',
);

pristine.addValidator(
  document.getElementById('lastname'),
  (value) => {
    const regex = /^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/;
    return regex.test(value);
  },
  'Error: Debe tener al menos 2 caracteres y no incluir números o símbolos',
);

pristine.addValidator(
  document.getElementById('name'),
  (value) => {
    const regex = /^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/;
    return regex.test(value);
  },
  'Error: Debe tener al menos 2 caracteres y no incluir números o símbolos',
);

pristine.addValidator(
  document.getElementById('socialSecurity'),
  (value) => {
    const regex = /^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/;
    return regex.test(value);
  },
  'Error: Debe tener al menos 2 caracteres y no incluir números o símbolos',
);

pristine.addValidator(
  document.getElementById('birthDate'),
  (value) => {
    return isValidDate(value);
  },
  'Error: La fecha debe ser anterior a hoy y posterior al 01-01-1900',
);

form.addEventListener('submit', (event) => {
  if (!pristine.validate()) event.preventDefault();
});

function isValidDate(dateString) {
  const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (!dateRegex.test(dateString)) {
    return false;
  }

  const [year, month, day] = dateString.split('-').map(Number);

  const date = new Date(year, month - 1, day);
  if (date.getDate() !== day || date.getMonth() + 1 !== month || date.getFullYear() !== year) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (date > today) {
    return false;
  }

  return true;
}
