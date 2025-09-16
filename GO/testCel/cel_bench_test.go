package testCel

import (
	"testing"
)

func BenchmarkCEL(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, in := range TestInputsMap {
			_, _, _ = prg.Eval(in)
		}
	}
}
