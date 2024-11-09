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

export const evolutions = [
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000001,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000001</h2><p>Evolución: El paciente ha mostrado mejoría parcial en la intensidad del dolor tras implementar técnicas de relajación y mejorar la calidad del sueño. La presión arterial permanece estable, y se recomienda continuar con medidas para reducir el estrés y evitar el uso excesivo de analgésicos para evitar cefalea de rebote.</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000002,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000002</h2><p>El dolor de garganta ha disminuido ligeramente con el uso de analgésicos y reposo vocal. La inflamación sigue presente, pero no ha progresado. Se mantiene la hidratación y se sugiere continuar con medidas de alivio sintomático. No se observan signos de infección bacteriana, por lo que no se ha iniciado tratamiento antibiótico.</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000003,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000003</h2><p>La fiebre ha disminuido ligeramente con el uso de antipiréticos, aunque sigue presente en picos diarios. El malestar general y la sudoración continúan, pero sin empeoramiento de otros síntomas. Se han realizado análisis iniciales para descartar infecciones bacterianas y virales comunes, y se sugiere mantener la vigilancia de signos de alarma y rehidratación constante.</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000004,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000004</h2><p>El dolor torácico ha disminuido en intensidad, aunque persiste con la respiración profunda. Los estudios iniciales no muestran signos de compromiso cardiovascular agudo, pero se mantiene la vigilancia en caso de nuevos síntomas. Se recomienda reposo y evitar esfuerzos físicos mientras se realizan pruebas adicionales para descartar otras causas, como inflamación muscular o pleuritis.</p>',
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000005,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000005</h2><p>La disnea se mantiene estable y moderada, con alivio parcial en reposo. Los estudios iniciales de función pulmonar y ecocardiograma no revelan anormalidades severas, pero persiste la necesidad de vigilancia. Se recomienda evitar esfuerzos físicos intensos hasta descartar completamente causas obstructivas o insuficiencia cardíaca leve. Continúa en evaluación para precisar el origen de los síntomas y ajustar el manejo según resultados adicionales.</p>',
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000006,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000006</h2><p>La tos seca ha persistido, aunque sin empeoramiento significativo. Se han implementado medidas para evitar irritantes ambientales y se ha iniciado un tratamiento sintomático con antitusígenos, que han proporcionado cierto alivio. Se están realizando pruebas para descartar causas alérgicas, como rinitis o exposición a alérgenos, y se sugiere continuar con el seguimiento para ajustar el tratamiento según los hallazgos</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000007,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000007</h2><p>La fatiga persiste y continúa interfiriendo con las actividades diarias, aunque no se han encontrado hallazgos clínicos significativos en el examen físico. Se han realizado análisis de laboratorio para evaluar anemia y se han solicitado estudios de sueño, los cuales aún están pendientes. El paciente ha sido aconsejado sobre la importancia de una buena higiene del sueño y se han sugerido cambios en el estilo de vida. Se programará un seguimiento para revisar los resultados y ajustar el manejo según sea necesario.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000008,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000008</h2><p>La disnea se mantiene leve a moderada, con agravamiento al realizar esfuerzos físicos. Se han completado pruebas de función pulmonar, que sugieren una posible obstrucción leve, y se ha iniciado un tratamiento con broncodilatadores de acción corta, que han proporcionado cierto alivio. Se está a la espera de los resultados de los estudios adicionales para evaluar más a fondo la función pulmonar y descartar asma o EPOC. Se recomienda continuar evitando esfuerzos excesivos y se programará un seguimiento para ajustar el tratamiento según los hallazgos.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000009,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000009</h2><p>Los episodios de mareo y la sensación de inestabilidad persisten, aunque la frecuencia ha disminuido ligeramente. Se han realizado pruebas vestibulares y se han completado análisis de sangre para evaluar posibles causas sistémicas, como anemia o alteraciones electrolíticas, cuyos resultados son normales. Se ha recomendado al paciente evitar cambios bruscos de posición y se han sugerido ejercicios de equilibrio. Se programará un seguimiento para evaluar la respuesta al tratamiento y considerar otros estudios si los síntomas continúan.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000010,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000010</h2><p>El dolor abdominal y la distensión persisten, pero la intensidad ha disminuido con el uso de antiespasmódicos y cambios en la dieta. Los estudios iniciales, incluidos análisis de sangre y ecografía abdominal, no han mostrado anormalidades significativas. Se ha aconsejado al paciente sobre la importancia de mantener una dieta adecuada y evitar alimentos irritantes. Se continuará el seguimiento para evaluar la evolución de los síntomas y considerar el diagnóstico de síndrome de intestino irritable si la mejoría es limitada.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000010,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000010</h2><p>El dolor abdominal difuso y las náuseas persisten, pero la intensidad del dolor se ha mantenido estable. Se han realizado estudios de laboratorio y una ecografía abdominal, los cuales no han mostrado signos de apendicitis ni de inflamación aguda. El paciente ha sido tratado con antieméticos y analgésicos, lo que ha proporcionado cierto alivio. Se recomienda mantener una dieta blanda y seguir en observación para descartar otras causas gastrointestinales. Se programará un seguimiento para reevaluar los síntomas y considerar estudios adicionales si es necesario.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000011,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000011</h2><p>El dolor opresivo en el tórax ha disminuido, pero persiste de forma intermitente. Se realizaron estudios cardiovasculares, incluyendo un electrocardiograma y pruebas de esfuerzo, que no muestran signos de isquemia miocárdica. La sudoración y la dificultad para respirar han mejorado con el reposo y el uso de ansiolíticos. Se recomienda continuar la vigilancia y se sugiere un seguimiento cardiológico para descartar problemas subyacentes y asegurar un manejo adecuado de los síntomas.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000012,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000012</h2><p>Los episodios de náuseas y vómitos han continuado, aunque la frecuencia ha disminuido tras iniciar un tratamiento con antieméticos. El malestar abdominal persiste, pero no se han encontrado signos de deshidratación. Se han realizado análisis de sangre y una ecografía abdominal que no muestran anormalidades significativas. Se ha aconsejado al paciente sobre la importancia de mantener una dieta blanda y evitar alimentos irritantes. Se programará un seguimiento para reevaluar los síntomas y considerar pruebas adicionales si la mejoría no es notable.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000001,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000001</h2><p>La cefalea tensional persiste y se ha vuelto más frecuente a pesar del tratamiento actual. Se ha realizado una reevaluación de los factores desencadenantes, como el estrés y la falta de sueño, y se ha identificado una mayor tensión emocional en el paciente. Se ha ajustado el tratamiento, aumentando la dosis de analgésicos y añadiendo técnicas de manejo del estrés, como la terapia cognitivo-conductual. Se recomienda seguimiento semanal para evaluar la respuesta al nuevo enfoque y considerar tratamientos adicionales si la mejoría es limitada.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000002,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000002</h2><p>El dolor de garganta y la dificultad para tragar continúan, con enrojecimiento de la faringe persistente. Se han realizado pruebas adicionales, incluyendo un cultivo de garganta, que han mostrado resultados negativos para infecciones bacterianas. Se ha considerado la posibilidad de una causa viral o alérgica, y se ha iniciado un tratamiento sintomático con analgésicos y antiinflamatorios. Se recomienda continuar con el seguimiento para evaluar la evolución y considerar una derivación a un especialista en caso de que los síntomas no mejoren en las próximas semanas.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000003,
    description:
      '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: 20000003</h2><p>La fiebre alta y el malestar general persisten, con episodios de sudoración nocturna. Se han realizado estudios adicionales, incluyendo hemocultivos y análisis de imagen, que no han revelado infecciones evidentes. Se ha considerado la posibilidad de infecciones virales o no diagnosticadas y se ha iniciado un tratamiento empírico con antibióticos de amplio espectro mientras se esperan los resultados. Se recomienda un seguimiento estrecho para reevaluar la respuesta al tratamiento y ajustar según los hallazgos clínicos y de laboratorio.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000014,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000014</h2><p>Las palpitaciones intermitentes persisten, y el paciente describe episodios de latidos irregulares. Se realizó un electrocardiograma que mostró un ritmo sinusal normal, pero no se detectaron arritmias en el momento de la prueba. Se ha indicado un monitoreo Holter de 24 horas para evaluar la actividad eléctrica del corazón durante un período prolongado y detectar posibles episodios de arritmia intermitente. Mientras tanto, se ha recomendado evitar estimulantes como la cafeína y mantener un registro de los episodios. Se planificará un seguimiento para analizar los resultados del Holter y ajustar el tratamiento según sea necesario.</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000015,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000015</h2><p>La disnea con el esfuerzo persiste, aunque el paciente no ha experimentado empeoramiento en reposo. Las pruebas de función pulmonar muestran una leve reducción en la capacidad respiratoria, mientras que el electrocardiograma no revela anormalidades significativas. Se ha iniciado un tratamiento con broncodilatadores de acción corta para aliviar los síntomas durante la actividad física, y se han recomendado ejercicios de respiración. Se planificará un seguimiento para reevaluar la respuesta al tratamiento y, si es necesario, considerar estudios adicionales para descartar otras causas subyacentes de la disnea.</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000020,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000020</h2><p>La fatiga y la debilidad generalizada persisten, sin mejora notable a pesar del descanso. Los análisis de sangre iniciales han mostrado niveles normales de hemoglobina y función tiroidea dentro de los límites normales, descartando anemia y disfunción tiroidea como causas primarias. Se ha aconsejado al paciente sobre estrategias de manejo de la fatiga, incluyendo una rutina de sueño consistente y ejercicio leve. Se realizará un seguimiento cercano y se considerarán estudios adicionales, como evaluación de vitaminas y marcadores inflamatorios, si los síntomas persisten sin mejoría.</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000017,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000017</h2><p>Los niveles elevados de colesterol total y LDL se mantienen en el rango alto. Se ha revisado el perfil lipídico completo y se ha recomendado al paciente realizar cambios en el estilo de vida, incluyendo una dieta baja en grasas saturadas y colesterol, además de aumentar la actividad física regular. También se ha discutido el inicio de tratamiento con estatinas para reducir el riesgo cardiovascular a largo plazo, aunque se dará seguimiento a la respuesta a los cambios en el estilo de vida antes de iniciar medicación. Se programará una nueva evaluación del perfil lipídico en tres meses para monitorear el progreso.</p>',
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000018,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000018</h2><p>La presión arterial del paciente permanece elevada, con lecturas promedio de 130/150 mmHg, a pesar de las recomendaciones previas. Se ha revisado el historial de factores de riesgo, incluyendo la dieta, el nivel de actividad física y el estrés. Se ha sugerido implementar una dieta baja en sodio, aumentar el ejercicio moderado y reducir el consumo de cafeína. Se ha ajustado el tratamiento farmacológico, añadiendo un antihipertensivo de segunda línea para mejorar el control de la presión arterial. Se programará una consulta de seguimiento en cuatro semanas para evaluar la efectividad de los cambios y ajustar el tratamiento según sea necesario.</p>',
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000019,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000019</h2><p>Los episodios de mareo y sensación de pre-síncope persisten, especialmente al ponerse de pie, lo que sugiere posible hipotensión ortostática. Se ha realizado un electrocardiograma que muestra un ritmo sinusal normal y análisis de sangre que no evidencian alteraciones electrolíticas significativas. Se ha recomendado al paciente levantarse lentamente y aumentar la ingesta de líquidos y sal moderadamente. Además, se considerará realizar una prueba de inclinación para evaluar más a fondo la respuesta cardiovascular al cambio postural. Se programará un seguimiento para revisar la respuesta a estas medidas y ajustar el manejo si es necesario.</p>',
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000001,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000001</h2><p>La presión arterial sigue elevada, con un promedio de 150/170 mmHg. Se han ajustado las dosis de antihipertensivos y se han reforzado recomendaciones sobre dieta baja en sodio y actividad física regular. Se programará un control en dos semanas para evaluar la respuesta al ajuste.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000004,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000004</h2><p>Las arritmias persisten, pero con menor frecuencia y sin síntomas graves. Se mantendrá el tratamiento actual y el monitoreo regular. Próxima evaluación en un mes para ajustar según la respuesta.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000022,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000022</h2><p>El edema en piernas y tobillos persiste, aunque ha disminuido levemente con medidas de elevación y reducción de sal en la dieta. Se realizarán exámenes adicionales para precisar la causa. Control programado en una semana para seguimiento.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000018,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000018</h2><p>La presión arterial sigue elevada. Se ajustó el tratamiento farmacológico y se reforzaron medidas de estilo de vida, como reducción de sal, ejercicio y control del estrés. Se programará un seguimiento en dos semanas para evaluar la respuesta.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000019,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000019</h2><p>Las arritmias se mantienen estables, con pocos síntomas. Se continuará el monitoreo y se ajustará el tratamiento según los resultados de los exámenes. Control programado en un mes para reevaluar.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000020,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000020</h2><p>El edema persiste, pero sin cambios significativos. Se han solicitado exámenes de laboratorio y una ecografía para evaluar posibles causas subyacentes. Se recomienda elevar las piernas y continuar con la reducción de sal. Seguimiento en una semana para revisar los resultados.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000021,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000021</h2><p>Las arritmias se mantienen estables. Se continuará con el monitoreo regular y ajustes en el tratamiento según los resultados de los exámenes recientes y los síntomas reportados. Próximo control en un mes.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000022,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000022</h2><p>El edema en piernas y tobillos persiste, pero sin signos de empeoramiento. Se han realizado estudios renales y ecografía venosa, sin hallazgos significativos. Se recomienda continuar con medidas de elevación y control de líquidos. Seguimiento en una semana para evaluar la respuesta al tratamiento.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000018,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000018</h2><p>Las arritmias se mantienen controladas, con síntomas leves. Se continuará el monitoreo y se ajustará el tratamiento según los resultados recientes. Próximo seguimiento en un mes.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000019,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000019</h2><p>Se completaron los exámenes cardiovasculares, incluidos el electrocardiograma y ecocardiograma, con resultados dentro de los límites normales. No se encontraron contraindicaciones para la cirugía. Se recomienda continuar con las pautas prequirúrgicas estándar y realizar un control postoperatorio cercano.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000020,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000020</h2><p>El ecocardiograma se realizó sin hallazgos significativos de anomalías estructurales. La función cardíaca se mantiene dentro de los parámetros normales. No se identificaron alteraciones relevantes. Se recomienda continuar con el seguimiento regular y evaluar cualquier cambio en los síntomas en futuras consultas.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000014,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000014</h2><p>Los síntomas de arritmia han mejorado, con episodios menos frecuentes. Se continuará el monitoreo y ajuste del tratamiento según la evolución. Control programado en un mes para evaluar la respuesta.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000005,
    description:
      '<h1>Plantilla 1 del médico MP3002</h1><h2>Paciente: 20000005</h2><p>Se realizaron estudios de salud vascular, incluyendo medición de presión arterial y ecografía Doppler. No se detectaron signos de aterosclerosis ni insuficiencia venosa significativa. La presión arterial se encuentra en rangos normales. Se recomienda continuar con hábitos saludables y realizar controles periódicos.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  //
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000023,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000023</h2><p>El dolor articular persiste con limitación funcional moderada. Se realizaron radiografías de la articulación afectada, que no muestran signos de daño óseo significativo. Se sugiere continuar con antiinflamatorios y fisioterapia. Seguimiento en dos semanas para reevaluar.</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000024,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000024</h2><p>El paciente presenta contusiones en el [área afectada] y dolor leve a moderado. Se realizaron radiografías y una tomografía, que no muestran fracturas ni lesiones internas graves. Se recomienda tratamiento sintomático con analgésicos y antiinflamatorios, y seguimiento en una semana para evaluar la evolución.</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000025,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000025</h2><p>El dolor en la cadera persiste con limitación de movimiento. Se realizaron radiografías que confirman signos de coxartrosis en fase inicial. Se ha recomendado tratamiento conservador con analgésicos, fisioterapia y cambios en la actividad. Seguimiento en tres meses para evaluar la evolución.</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000026,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000026</h2><p> El dolor en el hombro persiste con limitación en el rango de movimiento. Se realizaron ecografías y resonancia magnética, que muestran signos de tendinitis en el manguito rotador sin evidencia de desgarro. Se ha iniciado tratamiento con fisioterapia y antiinflamatorios. Seguimiento en dos semanas para evaluar la respuesta.</p>',
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000027,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000027</h2><p>El quiste en [zona afectada] no presenta signos de inflamación ni dolor. Se realizaron estudios de imagen (ecografía/resonancia), que sugieren un quiste benigno. Se recomienda seguimiento periódico para monitorear cambios en el tamaño o síntomas, con opción de drenaje si se presentan complicaciones.</p>',
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000028,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000028</h2><p>Se ha proporcionado al paciente un plan de ejercicios enfocado en fortalecer las áreas vulnerables relacionadas con [actividad específica]. Se recomendó también la adopción de técnicas de ergonomía y medidas preventivas específicas para evitar lesiones. Se sugiere seguimiento en un mes para evaluar la implementación de estas estrategias.</p>',
    date: DateTime.fromISO(fechasPasadas[1], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000029,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000029</h2><p>El dolor en el hombro persiste y se agrava con el movimiento. Se realizó una resonancia magnética que mostró signos de tendinitis en el manguito rotador. Se ha iniciado tratamiento con fisioterapia y antiinflamatorios. Se programará seguimiento en dos semanas para evaluar la mejoría.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000030,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000030</h2><p>El dolor y la rigidez cervical persisten. Se realizó una radiografía y una resonancia magnética que no evidencian hernias discales, pero sí signos de tensión muscular. Se ha recomendado fisioterapia, analgésicos y estiramientos. Seguimiento en una semana para evaluar la respuesta al tratamiento.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000031,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000031</h2><p>El edema en las piernas persiste sin empeorar. Se realizaron análisis de sangre y una ecografía venosa, que no muestran insuficiencia venosa significativa ni alteraciones cardíacas. Se ha recomendado elevar las piernas y ajustar la ingesta de líquidos. Seguimiento en una semana para evaluar la evolución.</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000032,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000032</h2><p>El dolor y rigidez articular persisten. Se realizaron análisis de laboratorio, incluidos marcadores inflamatorios, que sugieren una posible artritis inflamatoria. Se ha iniciado tratamiento con antiinflamatorios y se recomendaron ejercicios suaves. Seguimiento en dos semanas para evaluar la respuesta al tratamiento y los resultados de los análisis.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000033,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000033</h2><p>Se realizó una evaluación completa, incluidos estudios genéticos y de imágenes. No se encontraron anomalías congénitas significativas. Se continuará con el seguimiento regular para monitorear cualquier síntoma relacionado. Se programará una consulta de seguimiento en tres meses.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000034,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000034</h2><p>El edema en las piernas persiste. Se realizaron pruebas de función renal y ecografía Doppler venosa, sin encontrar signos de insuficiencia venosa significativa ni alteraciones renales. Se ha sugerido continuar con medidas de elevación de las piernas y control de la ingesta de sal. Seguimiento en una semana para evaluar la evolución</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000035,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000035</h2><p>Las lesiones de tejidos blandos, incluyendo contusiones y esguinces, están mejorando con tratamiento conservador. Se ha recomendado reposo, aplicación de hielo, y analgésicos para el dolor. Se ha iniciado fisioterapia para mejorar la movilidad. Seguimiento en dos semanas para evaluar el progreso y ajustar el tratamiento si es necesario.</p>',
    date: DateTime.fromISO(fechasPasadas[3], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000036,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000036</h2><p>El tumor óseo se mantiene estable sin signos de crecimiento en los estudios recientes. Se continuará con el monitoreo mediante imágenes periódicas. No se requieren intervenciones en este momento. Seguimiento en tres meses para evaluar la evolución.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000037,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000037</h2><p>Se completaron todos los exámenes prequirúrgicos, incluidos análisis de sangre, electrocardiograma y evaluación cardiovascular, sin hallazgos preocupantes. El estado de salud general es adecuado para la cirugía programada. Se han considerado los factores de riesgo y se recomendaron medidas preventivas. Seguimiento postoperatorio cercano.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000034,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000034</h2><p>El paciente muestra una recuperación favorable tras la cirugía ortopédica, con signos de cicatrización adecuados en la zona intervenida. No se observan complicaciones, como infecciones o hematomas. Se ha recomendado continuar con la fisioterapia y evitar carga excesiva. Seguimiento en dos semanas para evaluar el progreso.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3003',
    patientDocument: 20000035,
    description:
      '<h1>Plantilla 1 del médico MP3003</h1><h2>Paciente: 20000035</h2><p>Las lesiones en las manos incluyen contusiones y un esguince leve en la muñeca. No se observan fracturas en las radiografías. Se ha iniciado tratamiento con reposo, inmovilización parcial y analgésicos. Se recomienda fisioterapia para recuperar movilidad. Seguimiento en una semana para evaluar la recuperación.</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },

  /*  {
    doctorLicense: 'MP3001',
    patientDocument: 20000001,
    description: '<h1>Plantilla 1 Dele médico MP3001</h1><h2>Paciente: </h2><p>Atención #1 con este médico</p>',
    date: DateTime.fromISO(fechasPasadas[0], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3001',
    patientDocument: 20000001,
    description: '<h1>Plantilla 1 del médico MP3002</h1><p>La presión arterial se ha disminuido</p>',
    date: DateTime.fromISO(fechasPasadas[4], { zone: 'UTC' }),
  },
  {
    doctorLicense: 'MP3002',
    patientDocument: 20000001,
    description:
      '<h1>Plantilla 3</h1><p>Se ha detectado un aumento en la presión arterial, se recomienda ajustar el estilo de vida</p>',
    date: DateTime.fromISO(fechasPasadas[2], { zone: 'UTC' }),
  }, */
];
