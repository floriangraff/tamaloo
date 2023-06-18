import RoundScore from "@/models/RoundScore";

class Round {
    constructor(id: number, playerScores: Array<RoundScore>) {
        this.id = id;
        this.playerScores = playerScores;
    }
    id: number;
    playerScores: Array<RoundScore>;
}

export default Round;