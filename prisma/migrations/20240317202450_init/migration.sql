/*
  Warnings:

  - You are about to drop the column `nameCompany` on the `User` table. All the data in the column will be lost.

*/
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
    "area" TEXT,
    "phone" TEXT
);
INSERT INTO "new_User" ("area", "country", "description", "email", "experience", "fullName", "idUser", "isEmploye", "ocupation", "password", "phone", "skills", "username") SELECT "area", "country", "description", "email", "experience", "fullName", "idUser", "isEmploye", "ocupation", "password", "phone", "skills", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
