import * as fs from "fs";

import { Team } from "../Team/Team";

export class ScoreMain {
	teamA: Team = new Team();
	teamB: Team = new Team();

	constructor() {
		const teamsJson = fs.readFileSync("teams.json", "utf-8");
		const teamsData = JSON.parse(teamsJson);

		this.teamA.name = teamsData.team1.name;
		this.teamA.players = teamsData.team1.players;

		this.teamB.name = teamsData.team2.name;
		this.teamB.players = teamsData.team2.players;
	}
}