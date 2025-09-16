"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCel = void 0;
const users_1 = require("../data/users");
const celSetup_1 = require("./celSetup");
const testCel = () => {
    let tot = 0;
    for (let index = 0; index < 1000; index++) {
        for (const entry of users_1.testInput) {
            const start = performance.now();
            const res = (0, celSetup_1.celEval)(entry);
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
exports.testCel = testCel;
