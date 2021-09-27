const scoringProbability: { [name: string]: number[] } = {
  Kirat_Nohil: [5, 30, 25, 10, 15, 1, 9, 5],
  Ns_Nodhi: [10, 40, 20, 5, 10, 1, 4, 10],
  R_Rumrah: [20, 30, 15, 5, 5, 1, 4, 20],
  Shashi_Henra: [30, 25, 5, 0, 5, 1, 4, 30],
};

export const scorePrediction = function weightedProbaility(palyerName: string) {
  let random = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  let probabilities: number[] = scoringProbability[palyerName];
  let weight: number = 0;
  for (let i = 0; i < probabilities.length; i++) {
    weight += probabilities[i];
    if (weight >= random) {
      if (i === probabilities.length - 1) return -1;
      return i;
    }
  }
};
