import Router from "express";
import { getTasks, postTasks, updateTasks } from "../Controllers/TaskController";
const router = Router();

router.get("/get-tasks", getTasks);
router.post("/post-tasks", postTasks);
router.patch("/update-task/:id", updateTasks);
export default router;
