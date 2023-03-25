package backend

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/lucregrey/dancecompregistration/models"

	_ "github.com/lib/pq"
)

var db *sql.DB

const (
	host     = "192.168.4.110"
	port     = 5432
	user     = "golangdbconnect"
	password = "12345"
	dbname   = "postgres"
)

// This function will make a connection to the database only once.
func init() {
	var err error
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	//connStr := "postgres://golangdbconnect:123456@192.168.4.110:5432/postgres?sslmode=disable"
	db, err = sql.Open("postgres", connStr)

	if err != nil {
		panic(err)
	}
	defer db.Close()

	if err = db.Ping(); err != nil {
		panic(err)
	}
	// this will be printed in the terminal, confirming the connection to the database
	fmt.Println("The database is connected")
}

//////////////////////////////////////////////////////////////////////////////////////////////

func GetEvents(w http.ResponseWriter, r *http.Request) {
	log.Println("Reached Get Events")
	decoder := json.NewDecoder(r.Body)
	var req models.UpdateEvents
	err := decoder.Decode(&req)
	if err != nil {
		log.Println("Failed to parse lead and follow statuses")
	}
	log.Println(req.LStatus)

	// We assign the result to 'rows'
	var status = req.LStatus + req.FStatus
	if status == "ampro" {
		status = "proam"
	}
	log.Println(status)
	query := "SELECT * FROM events"
	log.Println(query)

	rows, err := db.Query(query)
	if err != nil {
		log.Println("There was an error querying the db")
		http.Error(w, http.StatusText(500), http.StatusInternalServerError)
		return
	}
	log.Println("Called DB")
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

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(allEvents)
}
