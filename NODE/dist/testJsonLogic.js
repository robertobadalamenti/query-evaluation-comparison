"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testJsonLogic = void 0;
const json_logic_js_1 = __importDefault(require("json-logic-js"));
const users_1 = require("./users");
const rulesJsonLogic = {
    and: [
        {
            startsWith: [
                {
                    var: "FirstName",
                },
                "Stev",
            ],
        },
        {
            in: [
                {
                    var: "LastName",
                },
                ["Vai", "Vaughan"],
            ],
        },
        {
            ">": [
                {
                    var: "Age",
                },
                "28",
            ],
        },
        {
            or: [
                {
                    "==": [
                        {
                            var: "IsMusician",
                        },
                        true,
                    ],
                },
                {
                    "==": [
                        {
                            var: "Instrument",
                        },
                        "guitar",
                    ],
                },
            ],
        },
        {
            "==": [
                {
                    var: "GroupedField1",
                },
                {
                    var: "GroupedField4",
                },
            ],
        },
        {
            and: [
                { "<=": [new Date("1954-10-03"), { var: "Birthdate" }] },
                { "<=": [{ var: "Birthdate" }, new Date("1960-06-06")] },
            ],
        },
        {
            or: [
                {
                    "==": [
                        {
                            var: "GroupedField2",
                        },
                        "test1",
                    ],
                },
                {
                    "==": [
                        {
                            var: "Instrument",
                        },
                        "clapstick",
                    ],
                },
                {
                    "==": [
                        {
                            var: "Height",
                        },
                        "170",
                    ],
                },
                {
                    "==": [
                        {
                            var: "Birthdate",
                        },
                        "2025-09-12",
                    ],
                },
                {
                    and: [
                        {
                            "<=": [
                                "20",
                                {
                                    var: "Age",
                                },
                                "50",
                            ],
                        },
                        {
                            "==": [
                                {
                                    var: "Gender",
                                },
                                "O",
                            ],
                        },
                        {
                            or: [
                                {
                                    "==": [
                                        {
                                            var: "IsMusician",
                                        },
                                        true,
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    "!": {
                        "<=": [
                            "22:16",
                            {
                                var: "Alarm",
                            },
                            "19:15",
                        ],
                    },
                },
            ],
        },
    ],
};
json_logic_js_1.default.add_operation("startsWith", (a, b) => {
    if (typeof a !== "string" || typeof b !== "string")
        return false;
    return a.startsWith(b);
});
const testJsonLogic = () => {
    let totJson = 0;
    for (let i = 0; i < 1000; i++) {
        for (const entry of users_1.testInput) {
            entry.Birthdate = new Date(entry.Birthdate);
            const start = performance.now();
            const res = json_logic_js_1.default.apply(rulesJsonLogic, entry);
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
exports.testJsonLogic = testJsonLogic;
