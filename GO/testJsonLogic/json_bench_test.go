package testJsonLogic

import (
	"testing"

	_ "example.com/adEngine/jsonlogicsetup"

	jsonlogic "github.com/diegoholiveira/jsonlogic/v3"
)

func BenchmarkJsonLogic(b *testing.B) {
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		for _, in := range DataMap {
			_, _ = jsonlogic.ApplyInterface(Logic, in)
		}
	}
}
