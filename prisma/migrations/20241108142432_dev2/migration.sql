/*
  Warnings:

  - You are about to alter the column `start_date` on the `allergy` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `end_date` on the `allergy` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `evolution` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `date` on the `evolution` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `start_date` on the `habit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `end_date` on the `habit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `start_date` on the `pathological_history` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `end_date` on the `pathological_history` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `birthDate` on the `patient` table. All the data in the column will be lost.
  - Added the required column `birth_date` to the `patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `allergy` MODIFY `start_date` DATETIME NULL,
    MODIFY `end_date` DATETIME NULL;

-- AlterTable
ALTER TABLE `evolution` DROP PRIMARY KEY,
    MODIFY `date` DATETIME NOT NULL,
    ADD PRIMARY KEY (`doctor_license`, `patient_document`, `date`);

-- AlterTable
ALTER TABLE `habit` MODIFY `start_date` DATETIME NOT NULL,
    MODIFY `end_date` DATETIME NULL;

-- AlterTable
ALTER TABLE `pathological_history` MODIFY `start_date` DATETIME NOT NULL,
    MODIFY `end_date` DATETIME NULL;

-- AlterTable
ALTER TABLE `patient` DROP COLUMN `birthDate`,
    ADD COLUMN `birth_date` DATE NOT NULL;
