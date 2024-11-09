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
  document.getElementById('allergyName'),
  (value) => {
    const regex = /^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/;
    return regex.test(value);
  },
  'Error: Debe tener al menos 2 caracteres y no incluir números o símbolos',
);

form.addEventListener('submit', (event) => {
  if (!pristine.validate()) event.preventDefault();
});
