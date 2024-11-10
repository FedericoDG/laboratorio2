-- CreateTable
CREATE TABLE `user` (
    `user_document` INTEGER NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `password` VARCHAR(60) NOT NULL,
    `role` ENUM('ADMIN', 'DOCTOR') NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`user_document`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor` (
    `doctor_license` VARCHAR(36) NOT NULL,
    `user_document` INTEGER NOT NULL,
    `specialty` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `doctor_user_document_key`(`user_document`),
    PRIMARY KEY (`doctor_license`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patient` (
    `patient_document` INTEGER NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `birth_date` DATE NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL DEFAULT 'MALE',
    `social_security` VARCHAR(100) NOT NULL DEFAULT 'PARTICULAR',
    `is_active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`patient_document`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evolution` (
    `doctor_license` VARCHAR(36) NOT NULL,
    `patient_document` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `date` DATETIME NOT NULL,

    PRIMARY KEY (`doctor_license`, `patient_document`, `date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `appointment` (
    `doctor_license` VARCHAR(36) NOT NULL,
    `patient_document` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `start_time` TIME NOT NULL,
    `end_time` TIME NOT NULL,
    `reason` VARCHAR(100) NOT NULL DEFAULT 'Consulta general',
    `status` ENUM('NOT_ATTENDED', 'ATTENDED', 'CANCELLED') NOT NULL DEFAULT 'NOT_ATTENDED',

    PRIMARY KEY (`doctor_license`, `patient_document`, `date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `diagnosis` (
    `diagnosis_id` INTEGER NOT NULL AUTO_INCREMENT,
    `doctorLicense` VARCHAR(36) NOT NULL,
    `patientDocument` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `description` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`diagnosis_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `availability` (
    `doctor_license` VARCHAR(36) NOT NULL,
    `day` ENUM('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY') NOT NULL,
    `start_time` TIME NOT NULL,
    `end_time` TIME NOT NULL,

    PRIMARY KEY (`doctor_license`, `day`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `allergy` (
    `patient_document` INTEGER NOT NULL,
    `allergy_Id` VARCHAR(36) NOT NULL,
    `severity` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL,
    `start_date` DATETIME NULL,
    `end_date` DATETIME NULL,

    PRIMARY KEY (`patient_document`, `allergy_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `allergy_type` (
    `allergy_id` VARCHAR(191) NOT NULL,
    `allergy_name` VARCHAR(100) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`allergy_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pathological_history` (
    `pathological_history_id` VARCHAR(191) NOT NULL,
    `patient_document` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME NULL,

    PRIMARY KEY (`pathological_history_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `habit` (
    `habit_id` VARCHAR(191) NOT NULL,
    `patient_document` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME NULL,

    PRIMARY KEY (`habit_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medication` (
    `patient_document` INTEGER NOT NULL,
    `name` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`patient_document`, `name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `note_template` (
    `doctor_license` VARCHAR(36) NOT NULL,
    `name` VARCHAR(60) NOT NULL,
    `content` TEXT NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`doctor_license`, `name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `doctor` ADD CONSTRAINT `doctor_user_document_fkey` FOREIGN KEY (`user_document`) REFERENCES `user`(`user_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evolution` ADD CONSTRAINT `evolution_doctor_license_fkey` FOREIGN KEY (`doctor_license`) REFERENCES `doctor`(`doctor_license`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evolution` ADD CONSTRAINT `evolution_patient_document_fkey` FOREIGN KEY (`patient_document`) REFERENCES `patient`(`patient_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `appointment_doctor_license_fkey` FOREIGN KEY (`doctor_license`) REFERENCES `doctor`(`doctor_license`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `appointment_patient_document_fkey` FOREIGN KEY (`patient_document`) REFERENCES `patient`(`patient_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `diagnosis` ADD CONSTRAINT `diagnosis_doctorLicense_patientDocument_date_fkey` FOREIGN KEY (`doctorLicense`, `patientDocument`, `date`) REFERENCES `appointment`(`doctor_license`, `patient_document`, `date`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `availability` ADD CONSTRAINT `availability_doctor_license_fkey` FOREIGN KEY (`doctor_license`) REFERENCES `doctor`(`doctor_license`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `allergy` ADD CONSTRAINT `allergy_patient_document_fkey` FOREIGN KEY (`patient_document`) REFERENCES `patient`(`patient_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `allergy` ADD CONSTRAINT `allergy_allergy_Id_fkey` FOREIGN KEY (`allergy_Id`) REFERENCES `allergy_type`(`allergy_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pathological_history` ADD CONSTRAINT `pathological_history_patient_document_fkey` FOREIGN KEY (`patient_document`) REFERENCES `patient`(`patient_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `habit` ADD CONSTRAINT `habit_patient_document_fkey` FOREIGN KEY (`patient_document`) REFERENCES `patient`(`patient_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `medication` ADD CONSTRAINT `medication_patient_document_fkey` FOREIGN KEY (`patient_document`) REFERENCES `patient`(`patient_document`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note_template` ADD CONSTRAINT `note_template_doctor_license_fkey` FOREIGN KEY (`doctor_license`) REFERENCES `doctor`(`doctor_license`) ON DELETE RESTRICT ON UPDATE CASCADE;
