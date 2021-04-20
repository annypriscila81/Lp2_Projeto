const { conn } = require('../db');


async function create(data) {
  const sql = `
  INSERT INTO
    datas (dia_inicial, mes_inicial, ano_inicial, dia_final, mes_final, ano_inicial)
  VALUES
    (?, ?, ?, ?, ?, ?)
  `;

  const db = await conn();

  const { dia_inicial, mes_inicial, ano_inicial, dia_final, mes_final, ano_final } = data;

  const { lastID } = await db.run(sql, [dia_inicial, mes_inicial, ano_inicial, dia_final, mes_final, ano_final]);

  return lastID;
}

async function readAll() {
  const sql = `
    SELECT
      *
    FROM
      datas
  `;

  const db = await conn();

  const dias = await db.all(sql);

  return dias;
}

module.exports = { create, readAll };
