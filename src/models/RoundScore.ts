import Player from "@/models/Player";

class RoundScore {
    get player(): Player {
        return this._player;
    }
    score: number;
    private _player: Player;

    constructor(round: number, player: Player) {
        this._player = player;
        this.score = player.scoreOfRound(round);
    }
}

export default RoundScore;