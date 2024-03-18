/*
  Warnings:

  - You are about to drop the `Rol` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `rolId` on the `User` table. All the data in the column will be lost.
  - Added the required column `isEmploye` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Rol";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Skills";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isEmploye" TEXT NOT NULL,
    "fullName" TEXT,
    "country" TEXT,
    "ocupation" TEXT,
    "description" TEXT,
    "skills" TEXT,
    "experience" TEXT,
    "nameCompany" TEXT,
    "area" TEXT,
    "phone" TEXT
);
INSERT INTO "new_User" ("country", "description", "email", "idUser", "password", "phone", "skills", "username") SELECT "country", "description", "email", "idUser", "password", "phone", "skills", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
