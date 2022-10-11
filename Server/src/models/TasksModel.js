import { DataTypes } from "sequelize";
import sequelize from "../config/Database";

const { TEXT, STRING, DATEONLY, TIME, BOOLEAN } = DataTypes;

const Tasks = sequelize.define(
  "ToDo_Tasks",
  {
    taskName: TEXT,
    priority: STRING,
    deadlineDate: DATEONLY,
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
