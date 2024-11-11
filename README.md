# Atención Médica - Laboratorio de Programación 2

Este es el repositorio del proyecto **Atención Médica**, una aplicación diseñada para ayudar a los profesionales médicos a gestionar su agenda y consultar la información de la historia clínica de sus pacientes en una institución de salud.

## Descripción General

La aplicación permite a los médicos:

- Crear, listar, actualizar y eliminar Médicos.
- Crear, listar, actualizar y eliminar Pacientes.
- Crear, listar, actualizar y eliminar Alergias.
- Consultar su agenda diaria y ver los pacientes que deben atender, con el estado de cada turno.
- Ver y registrar detalles sobre la historia clínica electrónica (HCE) de sus pacientes, incluyendo antecedentes, diagnósticos, alergias, y más.
- Registrar diagnósticos y evoluciones durante la consulta de cada paciente.
- Utilizar templates de notas clínicas para agilizar la documentación de las atenciones.

## Funcionalidades

### Agenda del Profesional

- Visualización de los turnos diarios.
- Posibilidad de consultar turnos de otros días.
- Visualización de detalles como motivo de consulta y estado de cada turno.

### Historia Clínica Electrónica (HCE)

- **Evoluciones**: Notas clínicas en formato de texto enriquecido.
- **Diagnósticos**: Campo de texto libre obligatorio para cada atención.
- **Alergias**: Información opcional con campos como importancia, fechas, y nombre.
- **Antecedentes Patológicos**: Campos de texto libre con fechas asociadas.
- **Hábitos**: Información opcional sobre los hábitos del paciente.
- **Medicamentos en Uso**: Información sobre medicamentos activos para el paciente.

### Cierre de Atención

Para finalizar una consulta, es obligatorio haber registrado al menos un diagnóstico y una evolución. Solo los registros de la última atención pueden modificarse.

### Templates para Notas Clínicas

La aplicación permite crear y cargar templates de notas clínicas, facilitando la creación de evoluciones en la HCE.

## Estructura de la Base de Datos

La base de datos incluye tablas para representar la agenda y la historia clínica de los pacientes. Este esquema debe estar pre-poblado para probar la aplicación.

## Instrucciones de Instalación

1. Clonar este repositorio:

```bash
git clone https://github.com/FedericoDG/laboratorio2.git
```

2. Acceder a la carpeta:

```bash
cd laboratorio2
```

3. Reconstruir las dependencias del proyecto:

```bash
npm install
```

4. Renombrar el archivo _.env.explample_ a _.env_ y editar su contenido con la cadena de conexión a la base datos Mysql.
5. Inicializar los servicios de docker:

```bash
docker-compose up -d
```

6. Sembrar la base de datos:

```bash
  npm run database:seed
```

7. Ejecutar el servidor en modo desarrollo:

```bash
  npm run start:dev
```

## Tecnologías Usadas

- **Express**: Framework de backend en Node.js.
- **Prisma**: ORM para gestionar la base de datos.
- **EJS**: Motor de plantillas para renderizar las vistas en el servidor.
- **JWT**: Manejo de autenticación mediante tokens JSON Web Token.
- **Joi**: Validación de datos de variables de entorno.
- **Docker Compose**: Orquestación de contenedores para desarrollo y despliegue.
