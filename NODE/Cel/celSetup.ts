import { parse } from "@marcbachmann/cel-js";

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

export const celEval = parse(exprCel);
