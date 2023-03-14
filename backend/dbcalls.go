package backend

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/lucregrey/dancecompregistration/models"

	_ "github.com/lib/pq"
)

var db *sql.DB

// This function will make a connection to the database only once.
func init() {
	var err error

	connStr := "postgres://golangdbconnect:Danc3C0mp2022!@192.168.4.110:5432/postgres?sslmode=disable"
	db, err = sql.Open("postgres", connStr)

	if err != nil {
		panic(err)
	}

	if err = db.Ping(); err != nil {
		panic(err)
	}
	// this will be printed in the terminal, confirming the connection to the database
	fmt.Println("The database is connected")
}

//////////////////////////////////////////////////////////////////////////////////////////////

func GetEvents(w http.ResponseWriter, r *http.Request) {
	// checks if the request is a "GET" request
	if r.Method != "GET" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
		return
	}

	// We assign the result to 'rows'
	rows, err := db.Query("SELECT * FROM Events where dstatuses = 'amam';")

	if err != nil {
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	// creates placeholder of the sandbox
	allEvents := make([]models.Event, 0)

	// we loop through the values of rows
	for rows.Next() {
		event := models.Event{}
		err := rows.Scan(&event.Name)
		if err != nil {
			log.Println(err)
			http.Error(w, http.StatusText(500), 500)
			return
		}
		allEvents = append(allEvents, event)
	}

	if err = rows.Err(); err != nil {
		http.Error(w, http.StatusText(500), 500)
		return
	}

	// loop and display the result in the browser
	for _, event := range allEvents {
		fmt.Println(event.Name)
	}
}
