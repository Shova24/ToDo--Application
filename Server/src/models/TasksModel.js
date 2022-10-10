import { DataTypes } from "sequelize";
import sequelize from "../config/Database";

const { TEXT, INTEGER, DATE, TIME, BOOLEAN } = DataTypes;

const Tasks = sequelize.define(
  "ToDo_Tasks",
  {
    taskName: TEXT,
    priority: INTEGER,
    deadlineDate: DATE,
    starts: TIME,
    ends: TIME,
    is_deleted: BOOLEAN,
  },
  {
    timestamps: false,
    schema: "shova",
  }
);
export default Tasks;
