import RoundScore from "@/models/RoundScore";

class Round {
    constructor(id: number, roundScores: Array<RoundScore>) {
        this.id = id;
        this.playerScores = roundScores;
    }
    id: number;
    playerScores: Array<RoundScore>;

    addRoundScore(roundScore: RoundScore) {
        this.playerScores.push(roundScore)
    }
}

export default Round;