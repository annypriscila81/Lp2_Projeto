const { conn } = require('../db');

async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS datas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dia_inicial NUMERIC,
      mes_inicial NUMERIC,
      ano_inicial NUMERIC,
      dia_final NUMERIC,
      mes_final NUMERIC,
      ano_final NUMERIC
    )
  `;

  const db = await conn();

  await db.run(sql);
}

async function down() {
  const sql = `DROP TABLE datas`;

  const db = await conn();

  await db.run(sql);
}

module.exports = { up, down };