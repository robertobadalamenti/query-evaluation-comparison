package testCel

import (
	"fmt"
	"time"

	"github.com/google/cel-go/cel"
	"github.com/google/cel-go/common/types"
)

func ConvertBirthdate(dateStr string) types.Timestamp {
	t, err := time.Parse("2006-01-02", dateStr)
	if err != nil {
		panic(err)
	}
	return types.Timestamp{Time: t}
}

var prg cel.Program

func init() {
	env, _ := cel.NewEnv(
		cel.Variable("FirstName", cel.StringType),
		cel.Variable("LastName", cel.StringType),
		cel.Variable("Age", cel.IntType),
		cel.Variable("IsMusician", cel.BoolType),
		cel.Variable("Instrument", cel.StringType),
		cel.Variable("GroupedField1", cel.StringType),
		cel.Variable("GroupedField4", cel.StringType),
		cel.Variable("Birthdate", cel.TimestampType),
		cel.Variable("GroupedField2", cel.StringType),
		cel.Variable("Height", cel.StringType),
		cel.Variable("Gender", cel.StringType),
		cel.Variable("Alarm", cel.StringType),
	)

	expr := `
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
	`

	ast, _ := env.Compile(expr)
	prg, _ = env.Program(ast)
}

func Test() {
	var tot time.Duration

	for range 1000 {
		for _, in := range TestInputsMap {
			if bd, ok := in["Birthdate"].(string); ok {
				in["Birthdate"] = ConvertBirthdate(bd)
			}
			start := time.Now()
			val, detail, err := prg.Eval(in)
			elapsed := time.Since(start)
			tot += elapsed
			if er, ok := in["expectedResult"].(bool); ok {
				if er != val.Value() {
					fmt.Printf("Valutazione non riuscita expected: %v, found: %v, per: %v \n", er, val.Value(), in)

					fmt.Println("detail", detail)
					fmt.Println("err", err)

				}
			}
			if err != nil {
				fmt.Println("err", in)
			}

		}
	}
	fmt.Printf("[CEL] Tempo medio: %s\n", tot/1000)
}
