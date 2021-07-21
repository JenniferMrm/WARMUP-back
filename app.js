const express = require("express");
const app = express();
const connection = require("./db-config");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});

const serverPort = process.env.PORT || 8000;

app.listen(serverPort, () => {
  console.log(`Server is listening port ${serverPort}`);
});
