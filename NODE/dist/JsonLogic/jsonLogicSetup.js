"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rulesJsonLogic = void 0;
const json_logic_js_1 = __importDefault(require("json-logic-js"));
json_logic_js_1.default.add_operation("startsWith", (a, b) => {
    if (typeof a !== "string" || typeof b !== "string")
        return false;
    return a.startsWith(b);
});
exports.rulesJsonLogic = {
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
                28,
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
                        170,
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
                                20,
                                {
                                    var: "Age",
                                },
                                50,
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
exports.default = json_logic_js_1.default;
