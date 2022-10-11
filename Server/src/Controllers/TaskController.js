import Tasks from "../models/TasksModel";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll({ raw: true });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json("Tasks not Found");
  }
};

export const postTasks = async (req, res) => {
  try {
    console.log("====================================");
    console.log(req.body);
    console.log("====================================");
    const { taskName, priority, deadlineDate, starts, ends, is_deleted } = req.body;
    await Tasks.create({ taskName, priority, deadlineDate, starts, ends, is_deleted });
    console.log("====================================");
    console.log("Task created : ");
    console.log("====================================");
    res.status(201).json("task is created");
    return;
  } catch (err) {
    res.status(404).json("Post is not complete.");
  }
};
