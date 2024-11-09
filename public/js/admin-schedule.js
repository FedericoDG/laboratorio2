// DOM ELEMENTS
const autocompleteInput = document.getElementById('autocomplete');
const autocompleteList = document.getElementById('autocomplete-list');

resources = JSON.parse(resources);

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('autocomplete');
  const autocompleteList = document.getElementById('autocomplete-list');

  input.addEventListener('input', function () {
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll('.autocomplete-item');
    autocompleteList.style.display = 'block';

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });

  autocompleteList.addEventListener('click', function (event) {
    const selectedItem = event.target;
    input.value = selectedItem.textContent;
    input.dataset.id = selectedItem.getAttribute('data-id');
    autocompleteList.style.display = 'none';
  });

  document.addEventListener('click', function (event) {
    if (!autocompleteList.contains(event.target) && event.target !== input) {
      autocompleteList.style.display = 'none';
    }
  });
});

document.addEventListener('click', function (event) {
  if (!autocompleteInput.contains(event.target) && !autocompleteList.contains(event.target)) {
    autocompleteList.style.display = 'none';
  }
});

autocompleteInput.addEventListener('input', showAutocompleteOptions);

autocompleteInput.addEventListener('focus', function () {
  this.select();
});

// FUNCTIONS
function showAutocompleteOptions() {
  autocompleteList.innerHTML = '';
  const inputValue = autocompleteInput.value.toLowerCase();

  if (inputValue === '') {
    autocompleteList.style.display = 'none';
    return;
  }

  resources.forEach((item) => {
    if (item.title.toLowerCase().includes(inputValue)) {
      const optionDiv = document.createElement('li');
      optionDiv.textContent = item.title;
      optionDiv.addEventListener('click', function () {
        autocompleteInput.value = item.title;
        document.getElementById('calendar').classList.remove('hidden');

        Toastify({
          text: `Médico seleccionado: ${item.title}. Redirigiendo a la agenda...`,
          duration: 4000,
          close: true,
          gravity: 'bottom',
          position: 'right',
          stopOnFocus: true,
          style: {
            background: 'linear-gradient(to right, #0516b0, #0b6ee0)',
          },
          onClick: function () {},
        }).showToast();

        setTimeout(() => {
          window.location.href = `/panel/agenda/doctor/${item.id}`;
        }, 2000);
      });
      autocompleteList.appendChild(optionDiv);
    }
  });

  if (autocompleteList.children.length > 0) {
    autocompleteList.style.display = 'block';
  } else {
    autocompleteList.style.display = 'none';
  }
}
