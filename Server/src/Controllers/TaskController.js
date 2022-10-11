import Tasks from "../models/TasksModel";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll({ raw: true });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json("Tasks not Found");
  }
};

export const updateTasks = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Tasks.findOne({ where: { id: id } });
    if (task) {
      const { taskName, priority, deadlineDate, starts, ends, is_deleted } = req.body;
      await Tasks.update({ taskName, priority, deadlineDate, starts, ends, is_deleted }, { where: { id: id } });
      res.status(200).json(Tasks);
    } else {
      res.status(200).json("task does not exist");
    }
    return;
  } catch (err) {
    res.status(404).json("Tasks not Found");
  }
};

export const postTasks = async (req, res) => {
  try {
    const { taskName, priority, deadlineDate, starts, ends, is_deleted } = req.body;

    await Tasks.create({ taskName, priority, deadlineDate, starts, ends, is_deleted });
    res.status(201).json("task is created");
    return;
  } catch (err) {
    res.status(404).json("Post is not complete.");
  }
};
