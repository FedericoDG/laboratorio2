import db from '../src/common/db.js';
import { allergyTypes } from './seeders/allergy-types.js';
import { appointments } from './seeders/appointments.js';
import { availabilities } from './seeders/availabilities.js';
import { diagnosis } from './seeders/diagnosis.seed.js';
import { doctors } from './seeders/doctors.js';
import { evolutions } from './seeders/evolutions.js';
import { patients } from './seeders/patients.js';
import { templates } from './seeders/templates.js';
import { users } from './seeders/users.seed.js';

async function main() {
  await db.User.createMany({ data: users });
  await db.Doctor.createMany({ data: doctors });
  await db.Patient.createMany({ data: patients });
  await db.Availability.createMany({ data: availabilities });
  await db.AllergyType.createMany({ data: allergyTypes });
  await db.Appointment.createMany({ data: appointments });
  await db.Diagnosis.createMany({ data: diagnosis });
  await db.Evolution.createMany({ data: evolutions });
  await db.NoteTemplate.createMany({ data: templates });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    db.$disconnect;
  });
