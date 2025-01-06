import express from "express";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/get", (req, res) => {
	res.json({
		message: " is bind ",
	});
});

app.post("/post", (req, res) => {
	// Access the body directly
	const body = req.body;

	res.json({
		name: body.name,
		age: body.age,
	});
});

// Correct log message for the listening port
app.listen(3000, () => console.log("listening on the port 3000"));
