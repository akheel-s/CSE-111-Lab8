const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { users } = new PrismaClient();

// create
router.post("/", async (req, res) => {
	const { username, password } = req.body;
	const result = await users.create({
		data: {
			username,
			password,
		},
	});
	res.json(result);
});

// reads all users
router.get("/", async (req, res) => {
	const all_users = await users.findMany({
		select: {
			user_id: true,
			username: true,
			password: true,
		},
	});
	res.json(all_users);
});

// reads user based on id
router.get("/:id", async (req, res) => {
	const { user_id } = req.params;
	const user = await users.findFirst({
		where: {
			user_id: Number(user_id),
		},
	});
	res.json(user);
});

// update
router.put("/:id", async (req, res) => {
	const user_id = Number(req.params.id);
	const { username, password } = req.body;
	const result = await users.update({
		where: { user_id },
		data: {
			username,
			password,
		},
	});
	res.json(result);
});

// delete
router.delete("/:id", async (req, res) => {
	const user_id = req.params.id;
	const result = await users.delete({
		where: {
			user_id: Number(user_id),
		},
	});
	res.json(result);
});
module.exports = router;
