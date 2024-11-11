import { customFetch } from './custom-fetch.js';

const form = document.getElementById('form');
const formAllergy = document.getElementById('form-allergy');
const formMedication = document.getElementById('form-medication');
const formPathologicalHistory = document.getElementById('form-pathological-history');
const formHabit = document.getElementById('form-habit');
const noteTemplate = document.getElementById('noteTemplate');
const cancel = document.getElementById('cancel');

success = JSON.parse(success);
error = JSON.parse(error);
message = JSON.parse(message);
activeAppointment = JSON.parse(activeAppointment);

const quill = new Quill('#description', {
  theme: 'snow',
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  },
});

const hiddenInput = document.createElement('input');
hiddenInput.setAttribute('type', 'hidden');
hiddenInput.setAttribute('name', 'description');
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

noteTemplate.addEventListener('change', (event) => {
  quill.root.innerHTML = unescapeHtmlJsonQuotes(event.target.value);
});

// Form validations
const pristine = new Pristine(form);

pristine.addValidator(
  document.getElementById('diagnosis-1'),
  (value) => {
    const regex = /^.{5,}$/;
    return regex.test(value);
  },
  'Error: Debe tener al menos 10 caracteres',
);

form.addEventListener('submit', (event) => {
  if (!pristine.validate() || document.getElementById('description').textContent === '') {
    Toastify({
      text: 'La consulta debe tener al menos un diagnóstico, y una evolución',
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
    event.preventDefault();
  }
});

cancel.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = `/panel/agenda/doctor/${activeAppointment.doctorLicense}?error=true&message=Se%20canceló%20la%20atención.%20El%20turno%20permanece%20activo`;
});

// Form validations
const pristineAllergy = new Pristine(formAllergy);

pristineAllergy.addValidator(
  document.getElementById('allergyId'),
  (value) => {
    const regex = /^.{1,}$/;
    return regex.test(value);
  },
  'Error: Debe seleccionar una opción',
);

pristineAllergy.addValidator(
  document.getElementById('severity'),
  (value) => {
    const regex = /^.{1,}$/;
    return regex.test(value);
  },
  'Error: Debe seleccionar una opción',
);

pristineAllergy.addValidator(
  document.getElementById('startDate'),
  (value) => {
    const regex = /^.{1,}$/;
    return regex.test(value);
  },
  'Error: Debe seleccionar una opción',
);

// Form Allergy
formAllergy.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!pristineAllergy.validate()) {
    event.preventDefault();
    Toastify({
      text: 'Error. Campos obligatorios: Tipo, Grado y Fecha de inicio de la alergia',
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
  } else if (!validarFechas(document.getElementById('startDate').value, document.getElementById('endDate').value)) {
    event.preventDefault();
    event.preventDefault();
    Toastify({
      text: 'Error. Fecha de inicio debe ser anterior a la fecha de fin',
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
  } else {
    const data = new FormData(event.target);
    const body = Object.fromEntries(data.entries());

    customFetch(`/api/alergias/${activeAppointment.patientDocument}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          formAllergy.reset();
          window.location.href =
            '/panel/turnos/activo?patientDocument=' +
            activeAppointment.patientDocument +
            '&date=' +
            activeAppointment.date +
            '&success=true&message=Alergia%20cargada%20con%20éxito';
        } else {
          Toastify({
            text: 'Error. Ya existe esa alergia para ese paciente',
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
      })
      .catch((error) => {
        console.error('ERROR', error);
      });
  }
});

// Form validations
const pristineMedication = new Pristine(formMedication);

pristineAllergy.addValidator(
  document.getElementById('medicationName'),
  (value) => {
    const regex = /^.{3,}$/;
    return regex.test(value);
  },
  'Error: Debe tener al menos 3 caracteres',
);

// Form Medication
formMedication.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!pristineMedication.validate()) {
    event.preventDefault();
    Toastify({
      text: 'Error. Campos obligatorios: Nombre de la medicación',
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
  } else {
    const data = new FormData(event.target);
    const body = Object.fromEntries(data.entries());

    customFetch(`/api/medicacion/${activeAppointment.patientDocument}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          formAllergy.reset();
          window.location.href =
            '/panel/turnos/activo?patientDocument=' +
            activeAppointment.patientDocument +
            '&date=' +
            activeAppointment.date +
            '&success=true&message=Medicación%20cargada%20con%20éxito';
        } else {
          Toastify({
            text: 'Error. Ya existe esa medicación para ese paciente',
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
      })
      .catch((error) => {
        console.error('ERROR', error);
      });
  }
});

// Form validations
const pristinePathologicalHistory = new Pristine(formPathologicalHistory);

pristinePathologicalHistory.addValidator(
  document.getElementById('pathologicalHistoryDescription'),
  (value) => {
    const regex = /^.{3,}$/;
    return regex.test(value);
  },
  'Error: Debe tener al menos 3 caracteres',
);

pristinePathologicalHistory.addValidator(
  document.getElementById('startDate'),
  (value) => {
    const regex = /^.{1,}$/;
    return regex.test(value);
  },
  'Error: Debe seleccionar una opción',
);

// Form Pathological History
formPathologicalHistory.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!pristinePathologicalHistory.validate()) {
    Toastify({
      text: 'Error. Campos obligatorios: Descripción y fecha de inicio',
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
  } else if (
    !validarFechas(
      document.getElementById('pathologicalHistoryStartDate').value,
      document.getElementById('pathologicalHistoryEndDate').value,
    )
  ) {
    Toastify({
      text: 'Error. Fecha de inicio debe ser anterior a la fecha de fin',
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
  } else {
    const data = new FormData(event.target);
    const body = Object.fromEntries(data.entries());

    customFetch(`/api/patologias/${activeAppointment.patientDocument}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          formAllergy.reset();
          window.location.href =
            '/panel/turnos/activo?patientDocument=' +
            activeAppointment.patientDocument +
            '&date=' +
            activeAppointment.date +
            '&success=true&message=Alergia%20cargada%20con%20éxito';
        } else {
          Toastify({
            text: 'Error. Ya existe esa patología para ese paciente',
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
      })
      .catch((error) => {
        console.error('ERROR', error);
      });
  }
});

// Form validations
const pristineHabit = new Pristine(formHabit);

pristineHabit.addValidator(
  document.getElementById('pathologicalHistoryDescription'),
  (value) => {
    const regex = /^.{3,}$/;
    return regex.test(value);
  },
  'Error: Debe tener al menos 3 caracteres',
);

pristineHabit.addValidator(
  document.getElementById('startDate'),
  (value) => {
    const regex = /^.{1,}$/;
    return regex.test(value);
  },
  'Error: Debe seleccionar una opción',
);

// Form Pathological History
formHabit.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!pristineHabit.validate()) {
    Toastify({
      text: 'Error. Campos obligatorios: Descripción y fecha de inicio',
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
  } else if (
    !validarFechas(
      document.getElementById('pathologicalHistoryStartDate').value,
      document.getElementById('pathologicalHistoryEndDate').value,
    )
  ) {
    Toastify({
      text: 'Error. Fecha de inicio debe ser anterior a la fecha de fin',
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
  } else {
    const data = new FormData(event.target);
    const body = Object.fromEntries(data.entries());

    customFetch(`/api/habitos/${activeAppointment.patientDocument}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          formAllergy.reset();
          window.location.href =
            '/panel/turnos/activo?patientDocument=' +
            activeAppointment.patientDocument +
            '&date=' +
            activeAppointment.date +
            '&success=true&message=Hábito%20cargado%20con%20éxito';
        } else {
          Toastify({
            text: 'Error. Ya existe ese hábito para ese paciente',
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
      })
      .catch((error) => {
        console.error('ERROR', error);
      });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const banButtonsMedication = document.querySelectorAll('.ban-button-medication');
  const banButtonsAllergy = document.querySelectorAll('.ban-button-allergy');
  const banButtonsPathologicalHistory = document.querySelectorAll('.ban-button-pathological');
  const banButtonsHabit = document.querySelectorAll('.ban-button-habit');

  banButtonsMedication.forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-id');

      customFetch(`/api/medicacion/${name}/${activeAppointment.patientDocument}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        formAllergy.reset();
        window.location.href =
          '/panel/turnos/activo?patientDocument=' +
          activeAppointment.patientDocument +
          '&date=' +
          activeAppointment.date +
          '&success=true&message=Mericación%20eliminada%20con%20éxito';
      });
    });
  });

  banButtonsAllergy.forEach((button) => {
    button.addEventListener('click', () => {
      const allergyId = button.getAttribute('data-id');

      customFetch(`/api/alergias/${allergyId}/${activeAppointment.patientDocument}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        formAllergy.reset();
        window.location.href =
          '/panel/turnos/activo?patientDocument=' +
          activeAppointment.patientDocument +
          '&date=' +
          activeAppointment.date +
          '&success=true&message=Alergia%20eliminada%20con%20éxito';
      });
    });
  });

  banButtonsPathologicalHistory.forEach((button) => {
    button.addEventListener('click', () => {
      const pathologicalHistoryId = button.getAttribute('data-id');

      customFetch(`/api/patologias/${pathologicalHistoryId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        formAllergy.reset();
        window.location.href =
          '/panel/turnos/activo?patientDocument=' +
          activeAppointment.patientDocument +
          '&date=' +
          activeAppointment.date +
          '&success=true&message=Patología%20eliminada%20con%20éxito';
      });
    });
  });

  banButtonsHabit.forEach((button) => {
    button.addEventListener('click', () => {
      const habitDescription = button.getAttribute('data-id');

      customFetch(`/api/habitos/${habitDescription}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        formAllergy.reset();
        window.location.href =
          '/panel/turnos/activo?patientDocument=' +
          activeAppointment.patientDocument +
          '&date=' +
          activeAppointment.date +
          '&success=true&message=Hábito%20eliminado%20con%20éxito';
      });
    });
  });
});

function validarFechas(startDate, endDate) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const fechaInicio = new Date(startDate);

  // Validar que startDate sea anterior a hoy
  if (fechaInicio >= hoy) {
    console.info('startDate debe ser una fecha anterior a hoy.');
    return false;
  }

  // Validar que startDate sea anterior a endDate solo si endDate no es null
  if (endDate !== null && endDate !== '') {
    const fechaFin = new Date(endDate);
    if (fechaInicio >= fechaFin) {
      console.info('startDate debe ser anterior a endDate.');
      return false;
    }
  }

  return true;
}

function unescapeHtmlJsonQuotes(escapedString) {
  return escapedString
    .replace(/\\&quot;/g, '"') // Reemplaza \&quot; por "
    .replace(/\\"/g, '"') // Reemplaza \" por "
    .replace(/\\'/g, "'") // Reemplaza \' por '
    .replace(/\\\\/g, '\\') // Reemplaza \\ por \
    .replace(/&gt;/g, '>') // Reemplaza &gt; por >
    .replace(/&lt;/g, '<') // Reemplaza &lt; por <
    .replace(/&amp;/g, '&'); // Reemplaza &amp; por &
}
