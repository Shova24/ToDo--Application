import Tasks from "../models/TasksModel";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll({ raw: true });
    console.log("====================================");
    console.log(tasks);
    console.log("====================================");

    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json("Tasks not Found");
  }
};
