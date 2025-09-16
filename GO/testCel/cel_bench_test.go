package testCel

import (
	"testing"
)

func BenchmarkCEL(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, in := range TestInputsMap {
			if bd, ok := in["Birthdate"].(string); ok {
				in["Birthdate"] = ConvertBirthdate(bd)
			}
			_, _, _ = prg.Eval(in)
		}
	}
}
