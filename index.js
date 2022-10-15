const mongoose = require("mongoose");
// async function connectMongo() {
//   await mongoose.connect("mongodb://127.0.0.1/google-docs", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   });
// }
// connectMongo();
const CONNECTION__URL =
  "mongodb+srv://deno1804:deno1804@cluster0.76w4jft.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION__URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Db connected`);
  })
  .catch((error) => console.log(error));
const Document = require("./Document.js");

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("get-document", async (documentId) => {
    const document = findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);
    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });
    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});
const defaultValue = "";
async function findOrCreateDocument(id) {
  if (id == null) return;
  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: defaultValue });
}
