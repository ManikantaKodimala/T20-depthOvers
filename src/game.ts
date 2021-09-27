import { TeamMembers, Team } from "./team";
import { scorePrediction } from "./prediction";

export class Game {
  private static readonly scoreCard: number[] = [1, 2, 3, 4, 5, 6, 0, -1];
  private score: number;
  private team: Team;
  private oversLeft: number = 4;
  private balls: number = 6;
  private isMatchWon = false;
  private target: number = 40;
  private wicketsLost: number = 0;

  constructor() {
    this.score = 0;
    this.team = new Team("banglore");
  }

  getCommentary(
    status: {
      result: number;
      batsMan: string;
    },
    commentFor: string
  ): string {
    let comment: string = "";

    if (commentFor === "over") {
      return `${this.oversLeft} ${
        this.oversLeft > 1 ? "overs left" : "over left"
      }.${this.target - this.score} ${
        this.target - this.score > 1 ? "runs to win" : "run to win"
      }`;
    }
    if (status.result === -1) {
      comment = `${4 - this.oversLeft}.${6 - this.balls} ${
        status.batsMan
      } has lost his wicket`;
    } else {
      comment = `${4 - this.oversLeft}.${6 - this.balls} ${
        status.batsMan
      } scores ${status.result} ${status.result > 1 ? "runs" : "run"}
          `;
    }
    return comment;
  }

  startGame(): void {
    let batsMan: string = TeamMembers[0];
    let nonStriker: string = TeamMembers[1];
    let result: number = 0;
    let status = {
      result: result,
      batsMan: batsMan,
      nonStriker: nonStriker,
    };
    this.team.setScore(batsMan, result, true);
    this.team.setScore(nonStriker, result, true);
    while (
      this.oversLeft > 0 &&
      !this.isMatchWon &&
      this.wicketsLost < 3 &&
      this.score <= this.target
    ) {
      console.log(this.getCommentary(status, "over"));
      while (this.balls > 0 && this.wicketsLost < 3) {
        result = scorePrediction(batsMan)!;
        this.balls--;
        status = {
          result: result,
          batsMan: batsMan,
          nonStriker: nonStriker,
        };
        this.setStatus(status);
        if (this.score > this.target) {
          this.isMatchWon = true;
          break;
        }
        if (status.result % 2 === 1) {
          [batsMan, nonStriker] = [status.nonStriker, status.batsMan];
        }
      }
      if (!this.isMatchWon) {
        this.balls = 6;
        this.oversLeft--;
      }
      [batsMan, nonStriker] = [nonStriker, batsMan];
    }
    if (this.isMatchWon) {
      console.log(
        `Bangalore won by ${3 - this.wicketsLost} ${
          3 - this.wicketsLost > 1 ? "wickets" : "wicket"
        } and ${24 - ((4 - this.oversLeft) * 6 + (6 - this.balls))} balls left`
      );
    } else {
      console.log(`chennai won by ${this.target - this.score} runs`);
    }
    this.team.GetScoreCard();
  }

  setStatus(status: { result: number; batsMan: string; nonStriker: string }) {
    if (status.result === -1) {
      this.wicketsLost++;
      console.log(this.getCommentary(status, ""));
      this.team.setScore(status.batsMan, status.result, false);
      if (this.wicketsLost < 3) {
        status.batsMan = TeamMembers[this.wicketsLost + 1];
        this.team.setScore(status.batsMan, 0, true);
      }
      return;
    }
    console.log(this.getCommentary(status, ""));
    this.score += status.result;
    this.team.setScore(status.batsMan, status.result, false);
  }
}
