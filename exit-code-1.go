package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("[TRACE] <pre-commit-hook> === pre commit hook ===")
	fmt.Println("[TRACE] <pre-commit-hook> exit code: 1")
	os.Exit(1)
}
