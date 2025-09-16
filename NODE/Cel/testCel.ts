import { testInput } from "../data/users";
import { celEval } from "./celSetup";

export const testCel = () => {
  let tot = 0;
  for (let index = 0; index < 1000; index++) {
    for (const entry of testInput) {
      const start = performance.now();
      const res = celEval(entry);
      const end = performance.now();
      tot += end - start;

      if (res !== entry.expectedResult) {
        console.log("Incorrect evaluation ", entry);
        break;
      }
    }
  }
  console.log(`[CEL] Tempo medio: ${(tot / 1000).toFixed(2)} ms`);
};
