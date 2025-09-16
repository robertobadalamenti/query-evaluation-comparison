package main

import (
	"fmt"

	testJsonLogic "example.com/adEngine/JsonLogic"
	"example.com/adEngine/testCel"
)

func main() {
	fmt.Println("GO")

	testCel.Test()
	testJsonLogic.Test()
}
