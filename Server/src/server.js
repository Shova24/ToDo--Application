import app from "./app";
const port = 5000;

//stat server
app.listen(port, () => {
  console.log("Listening to port: ", port);
});
