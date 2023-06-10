import db from "./db.services";
import helper from "../utils/helper.util";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getAll(page: number = 1) {
  const rows = await prisma.categories.findMany();
  const meta = { page };

  return {
    rows,
    meta,
  };
}

// async function getMultiple(page: number = 1) {
//   const rows = await db.query(`SELECT id, name FROM categories LIMIT 10`, []);

//   const data = helper.emptyOrRows(rows);
//   const meta = { page };

//   return {
//     data,
//     meta,
//   };
// }

// async function create(programmingLanguage: any) {
//   const result = await db.query(
//     `INSERT INTO programming_languages 
//     (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
//     VALUES 
//     (?, ?, ?, ?, ?)`,
//     [
//       programmingLanguage.name,
//       programmingLanguage.released_year,
//       programmingLanguage.githut_rank,
//       programmingLanguage.pypl_rank,
//       programmingLanguage.tiobe_rank,
//     ]
//   );

//   let message = "Error in creating programming language";

//   // if (result.affectedRows) {
//   //   message = "Programming language created successfully";
//   // }

//   return { message };
// }

// async function update(id: number, programmingLanguage: any) {
//   const result = await db.query(
//     `UPDATE programming_languages 
//     SET name=?, released_year=?, githut_rank=?, 
//     pypl_rank=?, tiobe_rank=? 
//     WHERE id=?`,
//     [
//       programmingLanguage.name,
//       programmingLanguage.released_year,
//       programmingLanguage.githut_rank,
//       programmingLanguage.pypl_rank,
//       programmingLanguage.tiobe_rank,
//       id,
//     ]
//   );

//   let message = "Error in updating programming language";

//   // if (result.affectedRows) {
//   //   message = "Programming language updated successfully";
//   // }

//   return { message };
// }

// async function remove(id: number) {
//   const result = await db.query(
//     `DELETE FROM programming_languages WHERE id=?`,
//     [id]
//   );

//   let message = "Error in deleting programming language";

//   // if (result.affectedRows) {
//   //   message = "Programming language deleted successfully";
//   // }

//   return { message };
// }

export = {
  getAll
  // getMultiple,
  // create,
  // update,
  // remove,
};
