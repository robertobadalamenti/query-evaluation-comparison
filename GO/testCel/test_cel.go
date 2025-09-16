package testCel

import (
	"fmt"
	"time"
)

func Test() {
	var tot time.Duration

	for range 1000 {
		for _, in := range TestInputsMap {
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
