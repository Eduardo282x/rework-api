/*
  Warnings:

  - Made the column `username` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "lastname" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT,
    "skills" TEXT,
    "date" DATETIME,
    "age" INTEGER,
    "country" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "rolId" INTEGER NOT NULL,
    CONSTRAINT "User_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol" ("idRol") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("age", "country", "date", "description", "email", "idUser", "lastname", "name", "password", "phone", "rolId", "skills", "username") SELECT "age", "country", "date", "description", "email", "idUser", "lastname", "name", "password", "phone", "rolId", "skills", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
