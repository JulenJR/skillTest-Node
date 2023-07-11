import * as fs from "fs";

import { Player } from "../Player/Player";
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

	scoreTeamA1(playerName: Player): void {
		this.teamA.score += 1;
		this.teamA.lastScorePlayer = playerName;
	}

	scoreTeamA2(playerName: Player): void {
		this.teamA.score += 2;
		this.teamA.lastScorePlayer = playerName;
	}

	scoreTeamA3(playerName: Player): void {
		this.teamA.score += 3;
		this.teamA.lastScorePlayer = playerName;
	}

	scoreTeamB1(playerName: Player): void {
		this.teamB.score += 1;
		this.teamB.lastScorePlayer = playerName;
	}

	scoreTeamB2(playerName: Player): void {
		this.teamB.score += 2;
		this.teamB.lastScorePlayer = playerName;
	}

	scoreTeamB3(playerName: Player): void {
		this.teamB.score += 3;
		this.teamB.lastScorePlayer = playerName;
	}

	getScore(): string {
		const teamAScore = this.teamA.score.toString().padStart(3, "0");
		const teamBScore = this.teamB.score.toString().padStart(3, "0");

		const teamAPlayer = this.teamA.lastScorePlayer.getName() || "Unknown";
		const teamBPlayer = this.teamB.lastScorePlayer.getName() || "Unknown";

		return `${teamAScore}:${teamBScore}     (${teamAPlayer} - ${teamBPlayer})`;
	}
}
