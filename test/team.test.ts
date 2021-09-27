import { Team } from "../src/team";

let team: Team;
let newPlayer: boolean;
beforeAll(() => {
  team = new Team("Banglore");
  newPlayer = false;
  for (let score = 0; score < 6; score++)
    team.setScore("Ns_Nodhi", score, newPlayer);
});

test("returns number of balls played by a player, which is 0, when players enters crease", () => {
  let expected = 0;
  team.setScore("Kirat_Nohil", 0, true);

  let recieved = team.getPlayerBallsPlayed("Kirat_Nohil");

  expect(recieved).toEqual(expected);
});

test("returns number of balls played by a player, which is 2", () => {
  let expected = 2;
  team.setScore("Kirat_Nohil", 0, true);
  team.setScore("Kirat_Nohil", 1, false);
  team.setScore("Kirat_Nohil", 0, false);

  let recieved = team.getPlayerBallsPlayed("Kirat_Nohil");

  expect(recieved).toEqual(expected);
});

test("returns score of Ns_Nodhi, which is 15,", () => {
  let expected = 15;
  let palyerName = "Ns_Nodhi";

  let recieved = team.getPlayerScore(palyerName);

  expect(recieved).toEqual(expected);
});

test("returns true when players is out", () => {
  let expected = true;
  let palyerName = "Ns_Nodhi";
  let score = -1;
  team.setScore(palyerName, score, newPlayer);

  let recieved = team.isPlayerOut(palyerName);

  expect(recieved).toBe(expected);
});

test("retruns false as player not batted yet", () => {
  let expected = false;
  let palyerName = "R_Rumrah";

  let recieved = team.isPlayerPlayed(palyerName);

  expect(recieved).toBe(expected);
});
