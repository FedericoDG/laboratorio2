const form = document.getElementById('form');

success = JSON.parse(success);
error = JSON.parse(error);
message = JSON.parse(message);

const quill = new Quill('#content', {
  theme: 'snow',
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  },
});

if (!isCreateScreen) {
  noteTemplate = JSON.parse(noteTemplate);
  quill.root.innerHTML = noteTemplate.content;
}

const hiddenInput = document.createElement('input');
hiddenInput.setAttribute('type', 'hidden');
hiddenInput.setAttribute('name', 'content');
form.appendChild(hiddenInput);

form.onsubmit = function () {
  hiddenInput.value = quill.root.innerHTML;
};

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
  document.getElementById('name'),
  (value) => {
    const regex = /^[A-ZÁÉÍÓÚÑa-záéíóúñ0-9\-]{2,}$/;
    return regex.test(value);
  },
  'Error: Debe tener al menos 2 caracteres. Sólo letras, números y guiones ("-")',
);

form.addEventListener('submit', (event) => {
  if (!pristine.validate()) event.preventDefault();
});
