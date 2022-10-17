import Tasks from "../models/TasksModel";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll({ raw: true });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json("Tasks not Found");
  }
};

//delete from task list
export const updateTrash = async (req, res) => {
  try {
    const id = req.params.id;
    await Tasks.update({ is_deleted: "True" }, { where: { id: id } });
    console.log("====================================");
    console.log(req.body);
    console.log("====================================");
    res.status(200).json(req.body);
  } catch (err) {
    res.status(404).json("Trash not Found");
  }
};
export const redo = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Tasks.findOne({ where: { id: id } });
    if (task) {
      await Tasks.update({ is_deleted: "FALSE" }, { where: { id: id } });
      // const tasks = await Tasks.findAll({ where: { is_deleted: "TRUE" } }, { raw: true });
      const task = await Tasks.findOne({ where: { id: id } });
      res.status(200).json(task);
    } else {
      res.status(200).json([]);
    }
    return;
  } catch (err) {
    res.status(404).json(err);
  }
};
export const deleteParmanent = async (req, res) => {
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

export const updateTasks = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("GGWP", req.body);
    const { taskName, priority, deadlineDate, starts, ends, is_deleted } = req.body;
    await Tasks.update({ taskName, priority, deadlineDate, starts, ends, is_deleted }, { where: { id: id } });
    const tasks = await Tasks.findAll({ where: { is_deleted: false }, raw: true });
    // const task = await Tasks.findOne({ where: { id: id }, raw: true });
    res.status(200).json(tasks);
  } catch (err) {
    console.log("can not update tasks", err);
    res.status(404).json([]);
  }
};

export const postTasks = async (req, res) => {
  try {
    const { taskName, priority, deadlineDate, starts, ends, is_deleted } = req.body;
    const newTask = { taskName: taskName, priority: priority, deadlineDate: deadlineDate, starts: starts, ends: ends, is_deleted: is_deleted };
    console.log("====================================");
    console.log(newTask);
    console.log("====================================");

    await Tasks.create(newTask);

    res.status(201).json(newTask);
    return;
  } catch (err) {
    res.status(404).json("Post is not complete.");
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Tasks.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json([]);
  } catch (err) {
    res.status(404).json("Wrong try");
  }
};
