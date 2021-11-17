const express = require("express");
const server = express();
server.use(express.json());

PORT = 3001;
server.listen(PORT, () => {
	console.log(`SERVER RUNNING ON PORT ${PORT}`);
});

server.use("/api/users", require("./routes/users"));
