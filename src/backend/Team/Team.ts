import { Player } from "../Player/Player";

export class Team {
	name: string;
	players: Array<Player>;

	constructor() {
		this.name = "";
		this.players = [];
	}

	addPlayer(player: Player): void {
		this.players.push(player);
	}

	getTeam(): Array<Player> {
		return this.players;
	}
}
