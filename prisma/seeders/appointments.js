import { DateTime } from 'luxon';

function obtenerFechasPasadas() {
  const hoy = DateTime.now();
  const fechas = [];

  // Contador para los días hábiles anteriores
  let diasContados = 0;
  let fechaActual = hoy.minus({ days: 1 }); // Comenzar desde ayer

  // Bucle para obtener los últimos 5 días hábiles
  while (diasContados < 5) {
    // Verificar si es un día hábil (1-5)
    if (fechaActual.weekday <= 5) {
      // Si es de Dia 1 a Día 5
      fechas.push(fechaActual.toFormat('yyyy-MM-dd'));
      diasContados++;
    }
    // Restar un día
    fechaActual = fechaActual.minus({ days: 1 });
  }

  return fechas.reverse();
}
const fechasPasadas = obtenerFechasPasadas();

function obtenerHoyYSiguientesDiasHabiles() {
  const hoy = DateTime.now();
  const fechas = [];

  let diasContados = 0;
  let fechaActual = hoy;

  // Bucle para obtener los 5 días hábiles (incluyendo hoy si es hábil)
  while (diasContados < 5) {
    // Verificar si es un día hábil (1-5)
    if (fechaActual.weekday <= 5) {
      // Si es de Dia 1 a Día 5
      fechas.push(fechaActual.toFormat('yyyy-MM-dd'));
      diasContados++;
    }
    // Avanzar un día
    fechaActual = fechaActual.plus({ days: 1 });
  }

  return fechas;
}
const proximosDiasHabiles = obtenerHoyYSiguientesDiasHabiles();

// const proximosDiasHabiles = obtenerHoyYSiguientesDiasHabiles();

export const appointments = [
  /*   {
    doctorLicense: 'MP3001',
    patientDocument: 20000001,
    date: DateTime.fromISO(proximosDiasHabiles[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Vuelve por control',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000001,
    date: DateTime.fromISO(proximosDiasHabiles[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('18:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('18:30:00', { zone: 'UTC' }),
    reason: 'Quiere hacerse un chequeo más exaustivo',
  }, */
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000002,
    date: DateTime.fromISO(proximosDiasHabiles[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('18:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('18:30:00', { zone: 'UTC' }),
    reason: 'Vuelve por control',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000001,
    date: DateTime.fromISO(proximosDiasHabiles[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('18:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('19:00:00', { zone: 'UTC' }),
    reason: 'Quiere hacerse un chequeo más exaustivo',
  },
  // Una semana atrás
  // Dia 1
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000001,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Dolor de cabeza persistente',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000002,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Dolor de garganta',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000003,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Fiebre alta',
    status: 'ATTENDED',
  },
  // Dia 2
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000004,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Dolor en el pecho',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000005,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Dificultad para respirar',
    status: 'ATTENDED',
  },
  // Dia 3
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000006,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Tos seca',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000007,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Fatiga excesiva',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000008,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Dificultad para respirar',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000009,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Mareos frecuentes',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000010,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Dolor abdominal',
    status: 'ATTENDED',
  },
  // Dia 4
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000010,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Dolor abdominal',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000011,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    reason: 'Dolor en el pecho',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000012,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('18:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('18:30:00', { zone: 'UTC' }),
    reason: 'Náuseas y vómitos',
    status: 'ATTENDED',
  },
  // Dia 5
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000001,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Control',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000002,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Control',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000003,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Control',
    status: 'ATTENDED',
  },
  // MP3002
  // Dia 1
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000014,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Palpitaciones o latidos irregulares',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000015,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Dificultad para respirar durante el ejercicio',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000020,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Fatiga inusual o debilidad',
    status: 'ATTENDED',
  },
  // Dia 2
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000017,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Colesterol alto',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000018,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Hipertensión',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000019,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Mareos o desmayos',
    status: 'ATTENDED',
  },
  // Día 3
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000001,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Hipertensión',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000004,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Control de arritmias',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000022,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    status: 'ATTENDED',
  },
  // Día 4
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000018,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Hipertensión',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000019,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Control de arritmias',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000020,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000021,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Control de arritmias',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000022,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    status: 'ATTENDED',
  },
  // Día 5
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000018,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Control de arritmias',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000019,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Chequeo previo a una cirugía',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000020,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Exámenes de ecocardiograma',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000014,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:30:00', { zone: 'UTC' }),
    reason: 'Control',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000005,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('18:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('19:00:00', { zone: 'UTC' }),
    reason: 'Evaluación de la salud vascular',
    status: 'ATTENDED',
  },
  // MP3003
  // Dia 1
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000023,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Dolor persistente en las articulaciones',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000024,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Lesiones por accidentes automovilísticos',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000025,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Dolor de cadera o coxartrosis',
    status: 'ATTENDED',
  },
  // Dia 2
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000026,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Dolor de hombro',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000027,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Evaluación de quistes',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000028,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Consulta sobre métodos de prevención de lesiones',
    status: 'ATTENDED',
  },
  // Día 3
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000029,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    reason: 'Dolor de hombro',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000030,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Dolor o molestias en el cuello',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000031,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    status: 'ATTENDED',
  },
  // Día 4
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000032,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    reason: 'Dolor persistente en las articulaciones',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000033,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:30:00', { zone: 'UTC' }),
    reason: 'Evaluación de condiciones congénitas',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000034,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('17:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('18:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000035,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('18:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('18:30:00', { zone: 'UTC' }),
    reason: 'Tratamiento de lesiones de tejidos blandos',
    status: 'ATTENDED',
  },
  // Día 5
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000036,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Control de tumores óseos',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000037,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Chequeo previo a una cirugía',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000034,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Consulta postoperatoria tras una cirugía ortopédica',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000035,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:30:00', { zone: 'UTC' }),
    reason: 'Lesiones en las manos',
    status: 'ATTENDED',
  },
];
