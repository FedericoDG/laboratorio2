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
    diagnosis:
      'Cefalea Tensional: El paciente presenta dolor de cabeza persistente, pulsátil y asociado a estrés y falta de sueño',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000002,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Dolor de garganta',
    diagnosis:
      'Faringitis Aguda: El paciente presenta dolor de garganta persistente, dificultad para tragar y enrojecimiento de la faringe. No hay signos de infección bacteriana evidente',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000003,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Fiebre alta',
    diagnosis:
      'Fiebre Alta: El paciente presenta fiebre persistente por encima de 39°C, asociada a malestar general y sudoración. Se sugiere evaluar posibles infecciones',
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
    diagnosis:
      'Dolor de Pecho: El paciente presenta dolor en el tórax, de tipo opresivo, que se intensifica con la respiración profunda. Se sugiere descartar causas cardiovasculares',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000005,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Dificultad para respirar',
    diagnosis:
      'Dificultad para Respirar: El paciente presenta disnea moderada, especialmente al realizar esfuerzos. Se sugiere evaluar posibles causas respiratorias o cardiovasculares',
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
    diagnosis:
      'Tos Seca: El paciente presenta tos persistente y seca, sin producción de esputo. Se sugiere investigar posibles causas alérgicas o irritativas',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000007,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Fatiga excesiva',
    diagnosis:
      'Fatiga Excesiva: El paciente presenta fatiga persistente que interfiere con las actividades diarias, sin hallazgos clínicos significativos en el examen físico. Se sugiere evaluar posibles causas subyacentes, como anemia o trastornos del sueño',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000008,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Dificultad para respirar',
    diagnosis:
      'Dificultad para Respirar: El paciente presenta disnea leve a moderada, que se agrava con el esfuerzo físico. Se sugiere realizar una evaluación para descartar posibles causas respiratorias, como asma o enfermedad pulmonar obstructiva crónica (EPOC)',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000009,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Mareos frecuentes',
    diagnosis:
      'Mareos Frecuentes: El paciente presenta episodios recurrentes de mareo, asociados a sensación de inestabilidad. Se sugiere realizar una evaluación para descartar causas vestibulares o sistémicas',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000010,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Dolor abdominal',
    diagnosis:
      'Dolor Abdominal: El paciente presenta dolor en la región abdominal, de tipo cólico, que se acompaña de distensión abdominal. Se sugiere evaluar posibles causas gastrointestinales, como gastroenteritis o síndrome de intestino irritable',
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
    diagnosis:
      'Dolor Abdominal: El paciente presenta dolor en el abdomen, de tipo difuso, acompañado de náuseas. Se sugiere evaluar posibles causas gastrointestinales, como apendicitis o gastroenteritis',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000011,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    reason: 'Dolor en el pecho',
    diagnosis:
      'Dolor de Pecho: El paciente presenta dolor opresivo en el tórax, que se irradia al brazo izquierdo, acompañado de sudoración y dificultad para respirar. Se sugiere evaluar posibles causas cardiovasculares',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000012,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('18:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('18:30:00', { zone: 'UTC' }),
    reason: 'Náuseas y vómitos',
    diagnosis:
      'Náuseas y Vómitos: El paciente presenta episodios recurrentes de náuseas y vómitos, acompañados de malestar abdominal. Se sugiere evaluar posibles causas gastrointestinales, como gastroenteritis o intolerancia alimentaria',
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
    diagnosis:
      'Cefalea Tensional Persistente: El paciente regresa con quejas de dolor de cabeza recurrente, descrito como opresivo, que ha persistido a pesar del tratamiento previo. Se recomienda una reevaluación de los factores desencadenantes y ajuste del tratamiento',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000002,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Control',
    diagnosis:
      'Faringitis Persistente: El paciente regresa con quejas de dolor de garganta persistente, con dificultad para tragar y enrojecimiento de la faringe. Se sugiere reevaluar y considerar pruebas adicionales para descartar infecciones bacterianas',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000003,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Control',
    diagnosis:
      'Fiebre Alta Persistente: El paciente regresa con fiebre que persiste por encima de 39°C, acompañada de malestar general y sudoración. Se sugiere reevaluar las posibles causas infecciosas y considerar estudios adicionales',
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
    diagnosis:
      'Palpitaciones: El paciente regresa quejándose de palpitaciones intermitentes y sensación de latidos irregulares en el pecho. Se recomienda realizar un electrocardiograma y un monitoreo Holter para evaluar la actividad eléctrica del corazón durante un período prolongado',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000015,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Dificultad para respirar durante el ejercicio',
    diagnosis:
      'Disnea de Esfuerzo: El paciente regresa con quejas de dificultad para respirar al realizar actividades físicas. Se sugiere realizar pruebas de función pulmonar y un electrocardiograma para evaluar la causa de la disnea',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000020,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Fatiga inusual o debilidad',
    diagnosis:
      'Fatiga Inusual: El paciente regresa quejándose de fatiga persistente y debilidad generalizada que no mejora con el descanso. Se sugiere realizar análisis de sangre para evaluar posibles causas subyacentes, como anemia o disfunción tiroidea',
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
    diagnosis:
      'Hiperlipidemia: El paciente regresa con resultados de laboratorio que indican niveles elevados de colesterol total y LDL. Se recomienda evaluar el perfil lipídico y considerar cambios en el estilo de vida y posibles tratamientos farmacológicos',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000018,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Hipertensión',
    diagnosis:
      'Hipertensión Arterial: El paciente regresa con lecturas de presión arterial consistentemente elevadas, con valores promedio de 130/150 mmHg. Se recomienda evaluar factores de riesgo y considerar cambios en el tratamiento',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000019,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Mareos o desmayos',
    diagnosis:
      'Mareo y Pre-síncope: El paciente regresa quejándose de episodios recurrentes de mareos y sensación de desmayo, especialmente al ponerse de pie. Se recomienda realizar pruebas diagnósticas para evaluar la causa subyacente, incluyendo un electrocardiograma y análisis de sangre',
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
    diagnosis:
      'Hipertensión Arterial: El paciente regresa con lecturas de presión arterial elevadas, con valores de 150/170mmHg. Se recomienda realizar un monitoreo continuo y evaluar los factores de riesgo asociados',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000004,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Control de arritmias',
    diagnosis:
      'Arritmias Cardíacas: El paciente regresa para control de arritmias previamente diagnosticadas. Se recomienda continuar el monitoreo y evaluar la eficacia del tratamiento actual',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000022,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    diagnosis:
      'Edema Periférico: El paciente presenta hinchazón en las piernas y tobillos, que puede estar relacionada con retención de líquidos o problemas circulatorios. Se recomienda evaluar la causa subyacente mediante exámenes clínicos y de laboratorio',
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
    diagnosis:
      'Hipertensión Arterial: El paciente regresa con lecturas de presión arterial consistentemente elevadas, con valores de [valor sistólico]/[valor diastólico] mmHg. Se sugiere un ajuste en el tratamiento y la implementación de medidas de estilo de vida para controlar la presión arterial',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000019,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Control de arritmias',
    diagnosis:
      'Arritmias Cardíacas: El paciente regresa para el control de arritmias previamente diagnosticadas. Se recomienda continuar el monitoreo y ajustar el tratamiento según los síntomas y resultados de los exámenes',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000020,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    diagnosis:
      'Edema Periférico: El paciente presenta hinchazón en las piernas y tobillos, posiblemente relacionado con retención de líquidos o problemas circulatorios. Se recomienda realizar una evaluación más detallada para determinar la causa subyacente',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000021,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Control de arritmias',
    diagnosis:
      'Control de Arritmias: El paciente se presenta para el control de arritmias previamente diagnosticadas. Se recomienda continuar el monitoreo y ajustar el tratamiento en función de los síntomas y resultados de los exámenes recientes',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000022,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    diagnosis:
      'Edema Periférico: El paciente presenta hinchazón en las extremidades inferiores, específicamente en piernas y tobillos. El edema podría estar asociado con insuficiencia cardíaca, problemas renales o venosos. Se recomienda una evaluación detallada y tratamiento específico según la causa',
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
    diagnosis:
      'Control de Arritmias: El paciente acude para seguimiento de arritmias previamente diagnosticadas. Se recomienda continuar el monitoreo y ajustar el tratamiento según los síntomas actuales y los resultados de los estudios recientes',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000019,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Chequeo previo a una cirugía',
    diagnosis:
      'Evaluación Prequirúrgica: El paciente acude para un chequeo cardiovascular previo a una intervención quirúrgica programada. Se recomienda realizar una evaluación completa para asegurar un adecuado estado cardiovascular antes de la cirugía',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000020,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Exámenes de ecocardiograma',
    diagnosis:
      'Solicitado Ecocardiograma: El paciente se presenta para la realización de un ecocardiograma con el objetivo de evaluar la función cardíaca, verificar anomalías estructurales y medir el rendimiento del corazón en respuesta a síntomas recientes o como parte de un chequeo rutinario',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000014,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:30:00', { zone: 'UTC' }),
    reason: 'Control',
    diagnosis:
      'Seguimiento de Arritmias: El paciente regresa para control de arritmias previamente diagnosticadas. Se observan mejoras en los síntomas, aunque se requiere seguimiento continuo para ajustar el tratamiento según los hallazgos',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000005,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('18:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('19:00:00', { zone: 'UTC' }),
    reason: 'Evaluación de la salud vascular',
    diagnosis:
      'Evaluación de la Salud Vascular: El paciente acude para una evaluación general de la salud vascular, con el objetivo de detectar posibles factores de riesgo como hipertensión, aterosclerosis o insuficiencia venosa',
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
    diagnosis:
      'Dolor Articular Persistente: El paciente presenta molestias prolongadas en las articulaciones, especialmente en [articulación específica], con limitación funcional moderada. Se recomienda estudios de imagen y seguimiento para determinar la causa subyacente',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000024,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Lesiones por accidentes automovilísticos',
    diagnosis:
      'Lesiones por Accidentes Automovilísticos: El paciente presenta múltiples contusiones y dolor en [área afectada, e.g., cuello, espalda, extremidades] tras un accidente automovilístico. Se recomienda realizar estudios de imagen para evaluar posibles lesiones internas',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000025,
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Dolor de cadera o coxartrosis',
    diagnosis:
      'Coxartrosis: El paciente presenta dolor en la cadera, con limitación de movimiento y rigidez, lo que sugiere una posible coxartrosis. Se recomienda seguimiento con estudios de imagen para confirmar el diagnóstico y evaluar el grado de degeneración articular',
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
    diagnosis:
      'Dolor de Hombro: El paciente presenta dolor en el hombro izquierdo/derecho, con limitación en el rango de movimiento, lo que sugiere una posible tendinitis o desgarro del manguito rotador. Se recomienda realizar estudios de imagen para confirmar el diagnóstico',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000027,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    reason: 'Evaluación de quistes',
    diagnosis:
      'Evaluación de Quistes: El paciente presenta un quiste en [zona afectada, e.g., muñeca, rodilla, ovario], sin signos de inflamación o infección. Se recomienda realizar estudios de imagen y seguimiento para determinar la naturaleza del quiste y su posible tratamiento',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000028,
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Consulta sobre métodos de prevención de lesiones',
    diagnosis:
      'Consulta sobre Prevención de Lesiones: El paciente busca orientación sobre estrategias efectivas para prevenir lesiones en [actividad específica, e.g., deportes, trabajo, actividades cotidianas]. Se recomienda la implementación de un programa de ejercicios y educación sobre ergonomía y técnicas adecuadas',
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
    diagnosis:
      'Dolor de Hombro: El paciente presenta dolor en el hombro izquierdo/derecho, que se agrava con el movimiento y limita las actividades diarias. Se sugiere una evaluación para descartar lesiones del manguito rotador o tendinitis',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000030,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('14:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('15:00:00', { zone: 'UTC' }),
    reason: 'Dolor o molestias en el cuello',
    diagnosis:
      'Dolor en el Cuello: El paciente presenta dolor y rigidez en la región cervical, lo que sugiere una posible distensión muscular o tensión postural. Se recomienda una evaluación más detallada para descartar hernias discales u otras patologías cervicales',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000031,
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    diagnosis:
      'Hinchazón en Piernas o Tobillos: El paciente presenta edema en las extremidades inferiores, que puede ser secundario a causas como insuficiencia venosa, retención de líquidos o problemas cardíacos. Se recomienda realizar pruebas adicionales para determinar la causa subyacente',
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
    diagnosis:
      'Dolor Persistente en las Articulaciones: El paciente presenta dolor y rigidez en varias articulaciones, lo que sugiere un posible proceso inflamatorio, como artritis. Se recomienda una evaluación más detallada y análisis de laboratorio para determinar la causa específica',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000033,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:30:00', { zone: 'UTC' }),
    reason: 'Evaluación de condiciones congénitas',
    diagnosis:
      'Evaluación de Condiciones Congénitas: El paciente está siendo evaluado por la presencia de síntomas que sugieren posibles condiciones congénitas. Se requiere una valoración exhaustiva para determinar la naturaleza y el impacto de las anomalías presentes',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000034,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('17:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('18:00:00', { zone: 'UTC' }),
    reason: 'Hinchazón en piernas o tobillos',
    diagnosis:
      'Hinchazón en Piernas o Tobillos: El paciente presenta edema en ambas extremidades inferiores, lo que podría ser indicativo de insuficiencia venosa, retención de líquidos o condiciones cardíacas. Es necesario realizar más pruebas para determinar la causa subyacente',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000035,
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
    startTime: DateTime.fromISO('18:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('18:30:00', { zone: 'UTC' }),
    reason: 'Tratamiento de lesiones de tejidos blandos',
    diagnosis:
      'Tratamiento de Lesiones de Tejidos Blandos: El paciente presenta lesiones en tejidos blandos, incluyendo contusiones y esguinces. Se requiere un manejo adecuado para facilitar la recuperación y prevenir complicaciones a largo plazo',
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
    diagnosis:
      'Control de Tumores Óseos: El paciente está bajo observación por la presencia de un tumor óseo identificado en estudios anteriores. Se requiere seguimiento continuo para evaluar la evolución de la lesión y determinar la necesidad de intervenciones adicionales',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000037,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('15:30:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    reason: 'Chequeo previo a una cirugía',
    diagnosis:
      'Chequeo Previo a una Cirugía: El paciente se presenta para una evaluación completa antes de la cirugía programada. Es necesario asegurarse de que el estado de salud general sea adecuado y que se tomen en cuenta factores de riesgo',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000034,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('16:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('16:30:00', { zone: 'UTC' }),
    reason: 'Consulta postoperatoria tras una cirugía ortopédica',
    diagnosis:
      'Consulta Postoperatoria Tras una Cirugía Ortopédica: El paciente asiste a la evaluación postquirúrgica para monitorear la recuperación y el estado de la zona intervenida. Es esencial verificar la evolución y detectar posibles complicaciones',
    status: 'ATTENDED',
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000035,
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
    startTime: DateTime.fromISO('17:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('17:30:00', { zone: 'UTC' }),
    reason: 'Lesiones en las manos',
    diagnosis:
      'Lesiones en las Manos: El paciente presenta lesiones en las manos que pueden incluir contusiones, esguinces o heridas. Se requiere una evaluación exhaustiva para determinar la gravedad de las lesiones y el tratamiento adecuado',
    status: 'ATTENDED',
  },
];
