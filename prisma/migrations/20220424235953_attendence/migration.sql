/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `token` DROP FOREIGN KEY `Token_userId_fkey`;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `employee_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`employee_id`);

-- DropTable
DROP TABLE `token`;

-- CreateTable
CREATE TABLE `Attendence` (
    `attendence_id` INTEGER NOT NULL AUTO_INCREMENT,
    `attendence` VARCHAR(50) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usersEmployee_id` INTEGER NULL,

    PRIMARY KEY (`attendence_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loggedTime` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `SessionID` INTEGER NOT NULL,
    `login_time` DATETIME(3) NOT NULL,
    `logout_time` DATETIME(3) NOT NULL,
    `work_duration` DOUBLE NOT NULL,
    `attendenceAttendence_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Attendence` ADD CONSTRAINT `Attendence_usersEmployee_id_fkey` FOREIGN KEY (`usersEmployee_id`) REFERENCES `users`(`employee_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `loggedTime` ADD CONSTRAINT `loggedTime_attendenceAttendence_id_fkey` FOREIGN KEY (`attendenceAttendence_id`) REFERENCES `Attendence`(`attendence_id`) ON DELETE SET NULL ON UPDATE CASCADE;
