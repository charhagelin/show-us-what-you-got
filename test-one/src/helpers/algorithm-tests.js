import Algorithm from "./algorithm";
import sinon from "sinon";
import { expect } from "chai";

describe("Algorithm", () => {

it('should return Hog', () => {
     const numbers = [5, 10, 20, 25, 35, 40, 50, 55];
     numbers.forEach((number) => {
       expect(Algorithm(number)).to.equal('Hog');

    });
  });
});
