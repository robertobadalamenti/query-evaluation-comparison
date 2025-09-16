import { testInput } from "../data/users";
import jsonLogic, { rulesJsonLogic } from "./jsonLogicSetup";

export const testJsonLogic = () => {
  let totJson = 0;
  for (let i = 0; i < 1000; i++) {
    for (const entry of testInput) {
      const start = performance.now();
      const res = jsonLogic.apply(rulesJsonLogic as any, entry);
      const end = performance.now();
      totJson += end - start;
      if (res !== entry.expectedResult) {
        console.log("Incorrect evaluation ", entry);
        break;
      }
    }
  }
  console.log(`[JsonLogic] Tempo medio: ${(totJson / 1000).toFixed(2)} ms`);
};
