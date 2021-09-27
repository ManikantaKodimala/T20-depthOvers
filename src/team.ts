export enum TeamMembers {
  Kirat_Nohil,
  Ns_Nodhi,
  R_Rumrah,
  Shashi_Henra,
}
type playerStatus = {
  score: number;
  ballsPlayed: number;
  isOut: boolean;
  hasPlayed: boolean;
};
export class Team {
  private name: string;
  private individualScore = new Map<string, playerStatus>();

  constructor(name: string) {
    this.name = name;
    for (let index = 0; index < 4; index++) {
      this.individualScore.set(TeamMembers[index], {
        score: 0,
        ballsPlayed: 0,
        isOut: false,
        hasPlayed: false,
      });
    }
  }

  getPlayerScore(name: string): number {
    let score: number = this.individualScore.get(name)!.score;
    return score;
  }

  getPlayerBallsPlayed(name: string): number {
    let ballPlayed = this.individualScore.get(name)!.ballsPlayed as number;
    return ballPlayed;
  }

  isPlayerOut(name: string): boolean {
    let isPlayerOut = this.individualScore.get(name)!.isOut as boolean;
    return isPlayerOut;
  }

  isPlayerPlayed(name: string): boolean {
    let isPlayerPlayed = this.individualScore.get(name)!.hasPlayed as boolean;
    return isPlayerPlayed;
  }

  GetScoreCard(): void {
    for (let index = 0; index < 4; index++) {
      let memberStatus = this.individualScore.get(TeamMembers[index])!;
      if (memberStatus.hasPlayed) {
        let score = memberStatus.score;
        let ballsPlayed = memberStatus.ballsPlayed;
        let out = memberStatus.isOut;
        console.log(
          `${TeamMembers[index]} - ${score}${
            !out ? "*" : ""
          } (${ballsPlayed} balls)`
        );
      }
    }
  }

  setScore(name: string, score: number, newPlayer: boolean) {
    let memberStatus = this.individualScore.get(name)!;
    memberStatus.hasPlayed = true;
    if (!newPlayer) memberStatus.ballsPlayed++;

    if (score != -1) {
      memberStatus.score += score;
    } else {
      memberStatus.isOut = true;
    }
    this.individualScore.set(name, memberStatus);
  }
}
