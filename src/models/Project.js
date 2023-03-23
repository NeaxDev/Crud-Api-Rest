import pool from "../config/db.js";

export const allProjects = async () => {
  try {
    const result = await pool.query(`SELECT * FROM projects`);

    return result;
  } catch (error) {
    console.log(`Error ${error}`);
  }
};

export const findProjectById = async (id) => {
  try {
    const result = await pool.query(`SELECT * FROM projects WHERE id = $1`, [
      id,
    ]);
    return result;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const createProj = async (title, description, repository) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
            projects 
                (title, description, repository, created_at, updated_at) 
            VALUES 
                ($1, $2, $3, $4, $5) 
            RETURNING *`,
      [title, description, repository, new Date(), new Date()]
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProj = async (id) => {
  try {
    const result = await pool.query(
      `
      DELETE FROM 
        projects 
      WHERE 
        id = $1`,
      [id]
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updatedProj = async (id, title, description, repository) => {
  try {
    const result = await pool.query(
      `UPDATE 
            projects 
        SET 
            title = $1, 
            description = $2, 
            repository = $3 
        WHERE id = $4 
            RETURNING *`,
      [title, description, repository, id]
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
