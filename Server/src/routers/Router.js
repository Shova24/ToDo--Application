import Router from "express";
import TaskRouter from "./TasksRouter";
const router = Router();

router.use("/tasks", TaskRouter);
export default router;
