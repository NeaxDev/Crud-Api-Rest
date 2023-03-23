import express from "express";
import {
  getAllProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/getAllProjects", getAllProjects);

router.get("/projects/:id", getProject);

router.post("/projects/create", createProject);

router.delete("/projects/:id", deleteProject);

router.put("/projects/:id", updateProject);

export default router;
