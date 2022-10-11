import Router from "express";
import { getTasks, postTasks } from "../Controllers/TaskController";
const router = Router();

router.get("/get-tasks", getTasks);
router.post("/post-tasks", postTasks);
export default router;
