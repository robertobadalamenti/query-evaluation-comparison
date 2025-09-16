"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCel = void 0;
const cel_js_1 = require("@marcbachmann/cel-js");
const users_1 = require("./users");
const exprCel = `
		FirstName.startsWith("Stev") &&
		LastName in ["Vai", "Vaughan"] &&
		Age > 28 &&
		(IsMusician == true || Instrument == "guitar") &&
		GroupedField1 == GroupedField4 &&
		(Birthdate >= timestamp("1954-10-03T00:00:00Z") && Birthdate <= timestamp("1960-06-06T00:00:00Z")) &&
		(
			GroupedField2 == "test1" ||
			Instrument == "clapstick" ||
			Height == "170" ||
			Birthdate == timestamp("2025-09-12T00:00:00Z") ||
			(
				(Age >= 20 && Age <= 50) && Gender == "O" && IsMusician == true
			) ||
			(Alarm < "22:16" || Alarm > "19:15")
		)
	`;
const result = (0, cel_js_1.parse)(exprCel);
const testCel = () => {
    let tot = 0;
    for (let index = 0; index < 1000; index++) {
        for (const entry of users_1.testInput) {
            const start = performance.now();
            const res = result(entry);
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
