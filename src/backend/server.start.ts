import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/score", (req: Request, res: Response) => {
	const { team, points } = req.query;

	let score = 0;
	if (typeof points === "string") {
		score = parseInt(points, 10);
	} else if (typeof points === "number") {
		score = points;
	}

	res.json({
		[team as string]: {
			score,
		},
	});
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
