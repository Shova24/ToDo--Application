import Router from "express";
import { getTasks, postTasks, updateTasks, updateTrash, redo, deleteTask } from "../Controllers/TaskController";
const router = Router();

router.get("/get-tasks", getTasks);
router.post("/post-tasks", postTasks);
router.patch("/update-task/:id", updateTasks);
router.patch("/delete-task/:id", updateTrash);
router.patch("/redo-task/:id", redo);
router.delete("/delete-tash/:id", deleteTask);
export default router;
