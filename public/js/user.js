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
  document.getElementById('userDocument'),
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

if (isCreateScreen) {
  pristine.addValidator(
    document.getElementById('password'),
    (value) => {
      const regex = /^.{6,20}$/;
      return regex.test(value);
    },
    'Error: Debe tener entre 6 y 20 caracteres',
  );
} else {
  pristine.addValidator(
    document.getElementById('password'),
    (value) => {
      const isPassword = document.getElementById('password').value;
      if (isPassword.length > 0) {
        const regex = /^.{6,20}$/;
        return regex.test(value);
      } else {
        return true;
      }
    },
    'Error: Debe tener entre 6 y 20 caracteres, ó dejarlo en blanco para no actulizarlo',
  );
}

form.addEventListener('submit', (event) => {
  if (!pristine.validate()) event.preventDefault();
});
