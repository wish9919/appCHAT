const http = require("http").createServer();
const io = require("socket.io")(http);
const port = 3000;

const log = console.log;

http.listen(port, () => log(`server listening on port: ${port}`));

io.on("connection", socket => {
  log("connected");
  socket.on("message", evt => {
    log(evt);
    socket.broadcast.emit("message", evt);
  });
});
io.on("disconnect", evt => {
  log("some people left", evt);
});
