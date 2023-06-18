const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
    next();
  });
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({message: "Auth error"});
  }

  next();
}); 

server.use(jsonServer.defaults());
server.use(router);

server.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const fileData = await fs.readFile(path.resolve(__dirname, "db.json"), "utf-8");
    const db = JSON.parse(fileData);
    const { users } = db;
    const userFromBd = users.find(user => user.username === username && user.password === password);

    if (!userFromBd) {
      return res.status(403).json({message: "User doesnt exist"});
    }

    return res.status(200).json(userFromBd);
  } catch (error) {
    return res.status(500).json({message: JSON.stringify(error)});
  }
});

server.listen(8000, () => {
  console.log("server is running");
});