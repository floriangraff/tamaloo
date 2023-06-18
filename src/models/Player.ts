class Player {
    get totalScore(): number {
        return this.roundScores.reduce((sum, current) => sum + current, 0);
    }
    id: number;
    name: String;
    private _totalScore: number;
    roundScores: Array<number>;

    public addRoundScore(score: number) {
        this.roundScores.push(score);
    }

    constructor(id: number, name: String) {
        this.id = id;
        this.name = name;
        this._totalScore = 0;
        this.roundScores = [];
    }

    scoreOfRound(number: number) {
        return this.roundScores[number];
    }
}

export default Player;