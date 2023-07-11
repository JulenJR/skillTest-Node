import express, { Request, Response } from "express";

const app = express();
const port = 3000;

let teamAScore = 0;
let teamBScore = 0;

app.use(express.static("public"));

app.get("/score", (req: Request, res: Response) => {
	const { team, points } = req.query;

	if (team === "teamA") {
		teamAScore += parseInt(points as string, 10);
	} else if (team === "teamB") {
		teamBScore += parseInt(points as string, 10);
	}

	const updatedScores = {
		teamA: { score: teamAScore },
		teamB: { score: teamBScore },
	};

	res.json(updatedScores);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
