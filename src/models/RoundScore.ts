import Player from "@/models/Player";

class RoundScore {
    score: number;

    constructor(round: number, player: Player) {
        this.score = player.scoreOfRound(round);
    }
}

export default RoundScore;