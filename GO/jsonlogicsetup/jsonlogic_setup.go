package jsonlogicsetup

import (
	"strings"
	"time"

	jsonlogic "github.com/diegoholiveira/jsonlogic/v3"
)

func init() {
	jsonlogic.AddOperator("startsWith", func(values, data any) any {
		args, ok := values.([]any)
		if !ok || len(args) < 2 {
			return false
		}

		s, ok1 := args[0].(string)
		prefix, ok2 := args[1].(string)
		if !ok1 || !ok2 {
			return false
		}
		return strings.HasPrefix(s, prefix)
	})

	jsonlogic.AddOperator("dateBetween", func(values, data any) any {
		args, ok := values.([]any)
		if !ok || len(args) != 3 {
			return false
		}

		layout := "2006-01-02"
		dateStr, ok1 := args[1].(string)
		startStr, ok2 := args[0].(string)
		endStr, ok3 := args[2].(string)
		if !ok1 || !ok2 || !ok3 {
			return false
		}

		date, err1 := time.Parse(layout, dateStr)
		start, err2 := time.Parse(layout, startStr)
		end, err3 := time.Parse(layout, endStr)
		if err1 != nil || err2 != nil || err3 != nil {
			return false
		}

		return !date.Before(start) && !date.After(end)
	})
	jsonlogic.AddOperator("timeBetween", func(values, data any) any {
		args, ok := values.([]any)
		if !ok || len(args) != 3 {
			return false
		}

		layout := "15:04" // formato HH:mm

		startStr, ok1 := args[0].(string)
		timeStr, ok2 := args[1].(string)
		endStr, ok3 := args[2].(string)
		if !ok1 || !ok2 || !ok3 {
			return false
		}

		t, err1 := time.Parse(layout, timeStr)
		start, err2 := time.Parse(layout, startStr)
		end, err3 := time.Parse(layout, endStr)
		if err1 != nil || err2 != nil || err3 != nil {
			return false
		}

		return !t.Before(start) && !t.After(end)
	})
}
