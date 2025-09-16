import jsonLogic from "json-logic-js";
import { testInput } from "./users";

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

jsonLogic.add_operation("startsWith", (a: any, b: any) => {
  if (typeof a !== "string" || typeof b !== "string") return false;
  return a.startsWith(b);
});
export const testJsonLogic = () => {
  let totJson = 0;
  for (let i = 0; i < 1000; i++) {
    for (const entry of testInput) {
      entry.Birthdate = new Date(entry.Birthdate) as any;

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
