package testJsonLogic

import (
	"fmt"
	"time"

	_ "example.com/adEngine/jsonlogicsetup"

	jsonlogic "github.com/diegoholiveira/jsonlogic/v3"
)

func Test() {
	var tot time.Duration
	for range 1000 {
		for _, in := range DataMap {

			start := time.Now()
			result, _ := jsonlogic.ApplyInterface(Logic, in)

			elapsed := time.Since(start)
			tot += elapsed
			if er, ok := in["ExpectedResult"].(bool); ok {
				if er != result {
					fmt.Println("Valutazione sbagliata per", in)
				}
			}
		}
	}

	fmt.Printf("[JsonLogic] Tempo medio: %s\n", tot/1000)
}
