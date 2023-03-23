import {
  allProjects,
  findProjectById,
  createProj,
  deleteProj,
  updatedProj,
} from "../models/Project.js";

export const getAllProjects = async (req, res) => {
  const result = await allProjects();

  if (result.rows.length === 0)
    return res.status(404).json({
      msg: "data not found",
    });

  res.json(result.rows);
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  const result = await findProjectById(id);

  if (result.rows.length === 0)
    return res.status(404).json({
      msg: "Project no found",
    });

  res.json(result.rows[0]);
};

export const createProject = async (req, res) => {
  const { title, description, repository } = req.body;

  const result = await createProj(title, description, repository);

  if (result.rows.length === 0)
    return res.status(404).json({
      msg: "Ocurrio un error en el momento de crear el registro",
    });

  res.json({ msg: "Proyecto creado exitosamente" });
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  const result = await deleteProj(id);

  if (result.rowCount === 0)
    return res.status(404).json({
      message: "Project not found",
    });

  // return res.sendStatus(204);
  return res.json({ msg: "Se elimino correctamente el registro" });
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, repository } = req.body;

  const result = await updatedProj(id, title, description, repository);

  if (result.rows.length === 0) {
    return res.status(404).json({
      message: "Project not found",
    });
  }
  return res.json({ msg: "`Se actualizo correctamente la tarea`" });
};
