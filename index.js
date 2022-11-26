const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const CONNECTION__URL =
  "mongodb+srv://deno1804:deno1804@cluster0.ypnbu.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000 || 8000;

app.use(cors());
app.use(express.json());
app.use("/users", require("./routes/userRoute.js"));
app.use("/projects", require("./routes/projectRoute.js"));
app.use("/versions", require("./routes/versionRouter.js"));
app.use("/designFile", require("./routes/designFileRouter.js"));
app.use("/activityLog", require("./routes/activityLogRoute.js"));
app.use("/chat", require("./routes/chatRoutes.js"));
app.use("/notification", require("./routes/notificationRoute.js"));

mongoose
  .connect(CONNECTION__URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server Is Running on port: ${PORT} `);
    })
  )
  .catch((error) => console.log(error));
