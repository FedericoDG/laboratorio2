import { customFetch } from './custom-fetch.js';

// DOM ELEMENTS
const appointmentDate = document.getElementById('appointmentDate');
const calendarEl = document.getElementById('calendar');
const cancel = document.getElementById('cancel');
const searchAnPatient = document.getElementById('searchAnPatient');
const from = document.getElementById('from');
const modalTitle = document.getElementById('modalTitle');
const patientDocumentValue = document.getElementById('patientDocumentValue');
const parsedUser = JSON.parse(user);
const submitAppointment = document.getElementById('submitAppointment');
const tableContainer = document.getElementById('tableContainer');
const tooltip = document.getElementById('tooltip');
// const formStatus = document.getElementById('formStatus');
const statusContainer = document.getElementById('statusContainer');
const btnContainer = document.getElementById('btnContainer');
const closeModal = document.getElementById('close-modal-button');
const dateform = document.getElementById('dateForm');
const modal = UIkit.modal('#my-modal');

// VARIABLES
const now = new Date();
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');
const success = JSON.parse(urlParams.get('success'));
const error = JSON.parse(urlParams.get('error'));
let activePatient;
let activePatientDocument;
let activeDateValue;
let reason;
appointmets = JSON.parse(appointmets);
resources = JSON.parse(resources);
doctor = JSON.parse(doctor);

let selectedDateAndTime;

// CALENDAR
const calendar = new FullCalendar.Calendar(calendarEl, {
  initialDate: now,
  aspectRatio: 1.8,
  allDaySlot: false,
  titleFormat: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  locale: 'es',
  eventTimeFormat: {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  },
  slotLabelFormat: {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  },
  buttonText: {
    today: 'Hoy',
    month: 'mes',
    week: 'semana',
    day: 'día',
    list: 'lista',
  },
  headerToolbar: {
    start: 'today,prev,next',
    center: '',
    end: 'title',
  },

  initialView: 'timeGridDay',
  contentHeight: 'auto',
  slotLabelInterval: {
    minutes: 60,
  },
  slotMinTime: '14:00:00',
  slotMaxTime: '20:00:00',
  slotDuration: '00:30:00',
  hiddenDays: [0, 6],
  resources: [{ id: 'MP3001', title: 'Quintana Roberto' }],
  events: [...appointmets],
  eventDidMount: function (info) {
    if (info.event.extendedProps.status === 'ATTENDED') {
      info.el.style.background = 'linear-gradient(to right, #05b016, #0be08b)';
      info.el.style.borderColor = '#dddddd';
    } else if (info.event.extendedProps.status === 'NOT_ATTENDED') {
      info.el.style.background = 'linear-gradient(to right, #0516b0, #0b6ee0)';
      info.el.style.borderColor = '#dddddd';
    } else {
      info.el.style.background = 'linear-gradient(to right, #b00505, #e00b0b)';
      info.el.style.borderColor = '#dddddd';
    }
  },
  eventMouseEnter: function (info) {
    tooltip.innerHTML = `
      <strong>Turno:</strong> ${info.event.title}<br>
      <strong>Hora de inicio:</strong> ${info.event.start.toLocaleTimeString()}<br>
      <strong>Hora de fin:</strong> ${info.event.end.toLocaleTimeString()}<br>
      <strong>Razón de la consulta:</strong> ${info.event.extendedProps.reason}<br>
      <strong>Estado:</strong> ${info.event.extendedProps.status === 'ATTENDED' ? 'Atendido' : info.event.extendedProps.status === 'NOT_ATTENDED' ? 'No atendido' : 'Cancelado'}
    `;

    document.addEventListener('mousemove', function (e) {
      tooltip.style.left = e.pageX + 10 + 'px';
      tooltip.style.top = e.pageY + 10 + 'px';
    });

    tooltip.style.display = 'block';
  },
  eventMouseLeave: function () {
    tooltip.style.display = 'none';
  },
  dateClick: function (info) {
    const events = calendar.getEvents();
    const clickTime = info.date.getTime();
    const isOccupied = events.some(function (event) {
      const eventStart = event.start.getTime();
      const eventEnd = event.end?.getTime();
      const occupied = clickTime >= eventStart && clickTime < eventEnd;

      return occupied;
    });

    if (parsedUser.role === 'ADMIN') {
      if (isOccupied) {
        Toastify({
          text: 'Turno ocupado',
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
        if (isAFutureDate(info.dateStr)) {
          selectedDateAndTime = info.dateStr;
          const { formattedDate, formattedTime, timePlus30 } = formatDateTime(info.dateStr);
          modalTitle.textContent = `Médico: ${doctor.user.lastname} ${doctor.user.name}`;
          appointmentDate.textContent = `Fecha: ${formattedDate}`;
          from.textContent = `De: ${formattedTime} a ${timePlus30} hs.`;
          UIkit.modal(document.getElementById('modal')).show();
        } else {
          Toastify({
            text: 'No es posible crear un turno en esta fecha',
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
      }
    } else {
      console.info('Ud. tiene el rol de DOCTOR, no puede crear nuevos turnos');
    }
  },
  eventClick: function (info) {
    if (parsedUser.role === 'ADMIN') {
      statusContainer.innerHTML = '';

      activePatientDocument = info.event._def.publicId.split('#')[1];
      activeDateValue = info.event._def.publicId.split('#')[2];

      //patientDocumentValue = info.event._def.publicId.split('#')[1];
      //dateValue = info.event._def.publicId.split('#')[2];

      const label = document.createElement('label');
      label.setAttribute('for', 'status');
      label.setAttribute('class', 'uk-form-label uk-margin-right');
      label.textContent = 'Estado:';

      statusContainer.appendChild(label);

      const select = document.createElement('select');
      select.setAttribute('id', 'status');
      select.setAttribute('class', 'uk-select small-select');

      const option = document.createElement('option');
      option.value = 'ATTENDED';
      option.text = 'Atendido';
      select.appendChild(option);

      const option2 = document.createElement('option');
      option2.value = 'NOT_ATTENDED';
      option2.text = 'No Atendido';
      select.appendChild(option2);

      const option3 = document.createElement('option');
      option3.value = 'CANCELLED';
      option3.text = 'Cancelado';
      select.appendChild(option3);

      select.appendChild(option);
      select.appendChild(option2);
      select.appendChild(option3);
      select.value = info.event.extendedProps.status;

      statusContainer.appendChild(select);

      UIkit.modal(document.getElementById('modalStatus')).show();
    } else {
      modal.show();

      if (info.event.extendedProps.status === 'NOT_ATTENDED') {
        const patientDocument = info.event._def.publicId.split('#')[1];
        const date = info.event._def.publicId.split('#')[2];

        const initBtn = document.createElement('button');
        initBtn.setAttribute('class', 'uk-button uk-button-primary');
        initBtn.textContent = 'Iniciar atención';
        initBtn.addEventListener('click', () => {
          window.location.href = `/panel/turnos/activo?patientDocument=${patientDocument}&date=${date}`;
        });

        const consultBtn = document.createElement('button');
        consultBtn.setAttribute('class', 'uk-button uk-button-default uk-margin-small-left');
        consultBtn.textContent = 'Ver Historia Clínica';
        consultBtn.addEventListener('click', () => {
          window.location.href = `/panel/turnos/detalles?patientDocument=${patientDocument}&date=${date}`;
        });

        btnContainer.appendChild(initBtn);
        btnContainer.appendChild(consultBtn);

        // window.location.href = `/panel/turnos/activo?patientDocument=${patientDocument}&date=${date}`;
      } else if (info.event.extendedProps.status === 'ATTENDED') {
        const patientDocument = info.event._def.publicId.split('#')[1];
        const date = info.event._def.publicId.split('#')[2];

        const consultBtn = document.createElement('button');
        consultBtn.setAttribute('class', 'uk-button uk-button-default');
        consultBtn.textContent = 'Ver Historia Clínica';
        consultBtn.addEventListener('click', () => {
          window.location.href = `/panel/turnos/detalles?patientDocument=${patientDocument}&date=${date}`;
        });

        btnContainer.appendChild(consultBtn);
      } else {
        const patientDocument = info.event._def.publicId.split('#')[1];
        const date = info.event._def.publicId.split('#')[2];

        const consultBtn = document.createElement('button');
        consultBtn.setAttribute('class', 'uk-button uk-button-default');
        consultBtn.textContent = 'Ver Historia Clínica';
        consultBtn.addEventListener('click', () => {
          window.location.href = `/panel/turnos/detalles?patientDocument=${patientDocument}&date=${date}`;
        });

        btnContainer.appendChild(consultBtn);
      }
    }
  },
});

// CALENDAR RENDER
calendar.render();

dateform.addEventListener('submit', (event) => {
  event.preventDefault();
  calendar.gotoDate(event.target.date.value);
});

cancel.addEventListener('click', () => {
  activePatient = null;
  tableContainer.innerHTML = '';
  patientDocumentValue.value = '';

  submitAppointment.disabled = true;
  UIkit.modal(document.getElementById('modal')).hide();
});

closeModal.addEventListener('click', () => {
  modal.hide();
  btnContainer.innerHTML = '';
});

searchAnPatient.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const object = Object.fromEntries(data.entries());

  customFetch(`/panel/pacientes/api/${object.patientDocument}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      tableContainer.innerHTML = '';
      activePatient = data.patient;
      submitAppointment.disabled = true;

      if (data.patient) {
        submitAppointment.disabled = false;

        const table = document.createElement('table');
        table.classList.add('uk-table');
        table.classList.add('uk-table-small');

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const tr = document.createElement('tr');
        thead.appendChild(tr);

        const th = document.createElement('th');
        th.textContent = 'Documento';
        tr.appendChild(th);

        const th2 = document.createElement('th');
        th2.textContent = 'Apellido';
        tr.appendChild(th2);

        const th3 = document.createElement('th');
        th3.textContent = 'Nombre';
        tr.appendChild(th3);

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        const tr2 = document.createElement('tr');
        tbody.appendChild(tr2);

        const td = document.createElement('td');
        td.textContent = data.patient.patientDocument;
        tr2.appendChild(td);

        const td2 = document.createElement('td');
        td2.textContent = data.patient.lastname;
        tr2.appendChild(td2);

        const td3 = document.createElement('td');
        td3.textContent = data.patient.name;
        tr2.appendChild(td3);

        tableContainer.appendChild(table);

        const reasonCotainer = document.createElement('div');
        reasonCotainer.classList.add('uk-padding');

        const input = document.createElement('textarea');
        input.name = 'reason';
        input.placeholder = 'Razón del turno';
        input.classList.add('uk-form-large');
        input.classList.add('uk-input');
        input.style = 'padding: 10px;';
        input.value = reason || '';

        input.addEventListener('keyup', () => {
          reason = input.value;
        });

        reasonCotainer.appendChild(input);

        tableContainer.appendChild(reasonCotainer);
      }
    });
});

submitAppointment.addEventListener('click', () => {
  const body = {
    doctorLicense: doctor.doctorLicense,
    patientDocument: activePatient.patientDocument,
    date: new Date(selectedDateAndTime).toISOString(),
    startTime: new Date(selectedDateAndTime).toISOString(),
    reason: reason,
  };

  fetch('/panel/turnos/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 200) {
        window.location.href = `/panel/agenda/doctor/${doctor.doctorLicense}?success=true&message=Turno%20creado%20con%20éxito`;
      } else {
        console.error('error');
      }
    })
    .catch((error) => {
      window.location.href = `/panel/agenda/doctor/${doctor.doctorLicense}?error=true&message=Error%20al%20crear%20turno`;
      console.error('Error:', error);
    })
    .finally(() => {
      UIkit.modal(document.getElementById('modal')).hide();
    });
});

submitStatus.addEventListener('click', () => {
  const status = document.getElementById('status');

  const body = {
    doctorLicense: doctor.doctorLicense,
    patientDocument: activePatientDocument,
    date: new Date(activeDateValue).toISOString(),
    status: status.value,
  };

  fetch('/panel/turnos/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 200) {
        window.location.href = `/panel/agenda/doctor/${doctor.doctorLicense}?success=true&message=Turno%20modificado%20con%20éxito`;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

// FUNCTIONS
function isAFutureDate(isoDate) {
  const date = new Date(isoDate);
  const now = new Date();

  return now < date;
}

function formatDateTime(text) {
  // Convertir el texto en un objetoDate
  const date = new Date(text);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;

  const newDate = new Date(date.getTime() + 30 * 60000);
  const newHours = String(newDate.getHours()).padStart(2, '0');
  const newMinutes = String(newDate.getMinutes()).padStart(2, '0');
  const timePlus30 = `${newHours}:${newMinutes}`;

  return {
    formattedDate,
    formattedTime,
    timePlus30,
  };
}

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

// UIkit MODAL EVENTS
UIkit.util.on('#modal', 'show', function () {
  document.documentElement.classList.add('modal-open');
});

UIkit.util.on('#modal', 'hidden', function () {
  activePatient = null;
  tableContainer.innerHTML = '';
  patientDocumentValue.value = '';

  submitAppointment.disabled = true;
});

UIkit.util.on('#my-modal', 'hidden', function () {
  btnContainer.innerHTML = '';
});

UIkit.util.on('#modalStatus', 'show', function () {
  document.documentElement.classList.add('modal-open');
});
