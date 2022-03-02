-- CreateTable
CREATE TABLE `admin` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(20) NULL,
    `lastname` VARCHAR(20) NULL,
    `email` VARCHAR(50) NOT NULL,
    `mobile_no` INTEGER NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `job_role` VARCHAR(50) NOT NULL,
    `profile_pic` BLOB NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `master_admin` (
    `masters_id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`masters_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(50) NULL,
    `lastname` VARCHAR(50) NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `mobile_no` VARCHAR(15) NOT NULL,
    `jobRole` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_mobile_no_key`(`mobile_no`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `type` ENUM('EMAIL', 'API') NOT NULL,
    `emailToken` VARCHAR(191) NULL,
    `valid` BOOLEAN NOT NULL DEFAULT true,
    `expiration` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Token_emailToken_key`(`emailToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Token` ADD CONSTRAINT `Token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
