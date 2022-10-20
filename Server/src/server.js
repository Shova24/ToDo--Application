import app from "./app";
import sequelize from "../src/config/Database";
const port = 5000;

sequelize
  .sync()
  // .authenticate()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));
//start server
app.listen(port, () => {
  console.log("Listening to port: ", port);
});

//test
