export const getTasks = (req, res) => {
  try {
    res.status(200).json("Tasks found");
  } catch (err) {
    res.status(404).json("Tasks not Found");
  }
};
