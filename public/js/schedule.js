const parsedUser = JSON.parse(user);
const parsedAppointments = JSON.parse(appointmets);

const now = new Date();

const calendarEl = document.getElementById('calendar');
const tooltip = document.getElementById('tooltip'); // Referencia al tooltip

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialDate: now,
  editable: false,
  selectable: false,
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
  slotMinTime: '10:30:00',
  slotMaxTime: '21:00:00',
  slotDuration: '00:30:00',

  resources: [
    {
      id: parsedUser.doctor?.doctorLicense,
      title: `${parsedUser.lastname} ${parsedUser.name}`,
    },
  ],
  events: [...parsedAppointments],
  eventDidMount: function (info) {
    // Cambiar el color del evento según el estado "atendido"
    if (info.event.extendedProps.status) {
      info.el.style.backgroundColor = 'green'; // Color verde para eventos atendidos
      info.el.style.borderColor = 'green'; // Cambiar el color del borde
    } else {
      info.el.style.backgroundColor = 'red'; // Color naranja para eventos no atendidos
      info.el.style.borderColor = 'red'; // Cambiar el color del borde
    }
  },
  eventMouseEnter: function (info) {
    tooltip.innerHTML = `
      <strong>Turno:</strong> ${info.event.title}<br>
      <strong>Hora de inicio:</strong> ${info.event.start.toLocaleTimeString()}<br>
      <strong>Hora de fin:</strong> ${info.event.end.toLocaleTimeString()}<br>
      <strong>Atendido:</strong> ${info.event.extendedProps.status ? 'Sí' : 'No'}<br>
      <strong>Razón de la consulta:</strong> ${info.event.extendedProps.reason}
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
      const eventEnd = event.end.getTime();
      //const resources = event.getResources();
      // const resourceId = resources.length > 0 ? resources[0].id : null; // Solo obtenemos el primer recurso

      const occupied = clickTime >= eventStart && clickTime <= eventEnd;

      return occupied;
    });

    if (parsedUser.role === 'ADMIN') {
      if (isOccupied) {
        console.log('Imposible, turno ocupado');
      } else {
        console.log('Turno disponible');
        console.log('Fecha y hora seleccionada:', info.dateStr);
      }
    } else {
      console.info('Ud. tiene el rol de DOCTOR, no puede crear nuevos turnos');
    }
  },
  eventClick: function () {
    if (parsedUser.role === 'ADMIN') {
      console.info('Ud. tiene el rol de ADMINISTRADOR, no puede atender al paciente');
    }
  },
  datesSet: function (dateInfo) {
    const startDate = dateInfo.start;
    // const endDate = dateInfo.end;

    const dayOfWeek = startDate.getUTCDay();

    let slotMinTime;
    let slotMaxTime;

    switch (dayOfWeek) {
      case 0: // Domingo
        slotMinTime = '00:00:00';
        slotMaxTime = '00:00:00';
        break;
      case 6: // Sábado
        slotMinTime = '00:00:00';
        slotMaxTime = '00:00:00';
        break;

      default: // Lunes a Viernes
        slotMinTime = '10:00:00';
        slotMaxTime = '20:00:00';
    }

    calendar.setOption('slotMinTime', slotMinTime);
    calendar.setOption('slotMaxTime', slotMaxTime);
  },
});

calendar.render();
