export enum TeamMembers {
  Kirat_Nohil,
  Ns_Nodhi,
  R_Rumrah,
  Shashi_Henra,
}

export class Team {
  private name: string;
  private individualScore: {
    [name: string]: {
      score: number;
      ballsPlayed: number;
      isOut: boolean;
      played: boolean;
    };
  } = {};

  constructor(name: string) {
    this.name = name;
    for (let index = 0; index < 4; index++) {
      this.individualScore[TeamMembers[index]] = {
        score: 0,
        ballsPlayed: 0,
        isOut: false,
        played: false,
      };
    }
  }

  GetScoreCard(): void {
    for (let index = 0; index < 4; index++) {
      let member = TeamMembers[index];
      if (this.individualScore[member].played) {
        let score = this.individualScore[member].score;
        let ballsPlayed = this.individualScore[member].ballsPlayed;
        let out = this.individualScore[member].isOut;
        console.log(
          `${member} - ${score}${!out ? "*" : ""} (${ballsPlayed} balls)`
        );
      }
    }
  }

  setScore(name: string, score: number, newPlayer: boolean) {
    this.individualScore[name].played = true;
    if (!newPlayer) this.individualScore[name].ballsPlayed++;

    if (score != -1) {
      this.individualScore[name].score += score;
    } else {
      this.individualScore[name].isOut = true;
    }
  }
}
