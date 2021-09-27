import { prediction } from "../src/prediction";

test("return a number between -1 to 6 inclusive", () => {
  let palyerName: string = "Kirat_Nohil";
  let recieved = prediction(palyerName);

  expect(recieved).toBeLessThanOrEqual(6);
});

test("return a number between -1 to 6 inclusive", () => {
  let palyerName: string = "Kirat_Nohil";
  let recieved = prediction(palyerName);

  expect(recieved).toBeGreaterThanOrEqual(-1);
});

test("return a number between -1 to 6 inclusive", () => {
  let palyerName: string = "Ns_Nodhi";
  let recieved = prediction(palyerName);

  expect(recieved).toBeLessThanOrEqual(6);
});

test("return a number between -1 to 6 inclusive", () => {
  let palyerName: string = "Ns_Nodhi";
  let recieved = prediction(palyerName);

  expect(recieved).toBeGreaterThanOrEqual(-1);
});

test("return a number between -1 to 6 inclusive", () => {
  let palyerName: string = "R_Rumrah";
  let recieved = prediction(palyerName);

  expect(recieved).toBeLessThanOrEqual(6);
});

test("return a number between -1 to 6 inclusive", () => {
  let palyerName: string = "R_Rumrah";
  let recieved = prediction(palyerName);

  expect(recieved).toBeGreaterThanOrEqual(-1);
});

test("return a number between -1 to 6 inclusive", () => {
  let palyerName: string = "Shashi_Henra";
  let recieved = prediction(palyerName);

  expect(recieved).toBeLessThanOrEqual(6);
});

test("return a number between -1 to 6 inclusive", () => {
  let palyerName: string = "Shashi_Henra";
  let recieved = prediction(palyerName);

  expect(recieved).toBeGreaterThanOrEqual(-1);
});
