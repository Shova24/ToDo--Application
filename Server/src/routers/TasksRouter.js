import Router from "express";
import { getTasks } from "../Controllers/TaskController";
const router = Router();

router.get("/get-tasks", getTasks);
export default router;
