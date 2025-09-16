"use strict";

import { bench, run } from "mitata";
import jsonLogic, { rulesJsonLogic } from "./JsonLogic/jsonLogicSetup.js";
import { testInput } from "./data/users.js";
import { celEval } from "./Cel/celSetup.js";

bench("JsonLogic", async () => {
  for (const input of testInput) {
    jsonLogic.apply(rulesJsonLogic as any, input);
  }
});

bench("CEL", async () => {
  for (const input of testInput) {
    celEval(input);
  }
});

run();
