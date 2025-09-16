package testJsonLogic

import "encoding/json"

var Logic map[string]any

func init() {
	logicJSON := `
{
  "and": [
    {
      "startsWith": [
        {
          "var": "FirstName"
        },
        "Stev"
      ]
    },
    {
      "in": [
        {
          "var": "LastName"
        },
        [
          "Vai",
          "Vaughan"
        ]
      ]
    },
    {
      ">": [
        {
          "var": "Age"
        },
        28
      ]
    },
    {
      "or": [
        {
          "==": [
            {
              "var": "IsMusician"
            },
            true
          ]
        },
        {
          "==": [
            {
              "var": "Instrument"
            },
            "guitar"
          ]
        }
      ]
    },
    {
      "==": [
        {
          "var": "GroupedField1"
        },
        {
          "var": "GroupedField4"
        }
      ]
    },
    {
  "dateBetween": [
    "1954-10-03",
    {"var": "Birthdate"},
    "1960-06-06"
  ]
},
    {
      "or": [
        {
          "==": [
            {
              "var": "GroupedField2"
            },
            "test1"
          ]
        },
        {
          "==": [
            {
              "var": "Instrument"
            },
            "clapstick"
          ]
        },
        {
          "==": [
            {
              "var": "Height"
            },
            170
          ]
        },
        {
          "==": [
            {
              "var": "Birthdate"
            },
            "2025-09-12"
          ]
        },
        {
          "and": [
            {
              "<=": [
                20,
                {
                  "var": "Age"
                },
                50
              ]
            },
            {
              "==": [
                {
                  "var": "Gender"
                },
                "O"
              ]
            },
            {
              "or": [
                {
                  "==": [
                    {
                      "var": "IsMusician"
                    },
                    true
                  ]
                }
              ]
            }
          ]
        },
        {
          "!": {
        "timeBetween": ["22:16", {"var": "Alarm"}, "19:15"]

          }
        }
      ]
    }
  ]
}
      `

	if err := json.Unmarshal([]byte(logicJSON), &Logic); err != nil {
		panic(err)
	}
}
