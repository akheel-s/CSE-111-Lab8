const express = require("express");
const app = express();
app.use(express.json());

app.use("/api/users", require("./routes/users"));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
