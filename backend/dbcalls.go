package backend

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

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

	if err = db.Ping(); err != nil {
		panic(err)
	}
	// this will be printed in the terminal, confirming the connection to the database
	fmt.Println("The database is connected")
}

//////////////////////////////////////////////////////////////////////////////////////////////

func GetCompID(w http.ResponseWriter, r *http.Request) {
	log.Println("Reached Get Comp ID")
	decoder := json.NewDecoder(r.Body)
	var req models.CompetitionSelection
	err := decoder.Decode(&req)
	if err != nil {
		log.Println("Failed to parse lead and follow statuses")
	}

	// Open the db
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	// Open a connection to the database
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM competitions WHERE name = $1", req.CompetitionName)
	if err != nil {
		log.Println("There was an error querying the db")
		log.Println(err)
	}
	log.Println("Called DB")
	defer rows.Close()

	// creates placeholder of the sandbox
	allCompetitions := make([]models.Competition, 0)

	// we loop through the values of rows
	for rows.Next() {
		competition := models.Competition{}
		err := rows.Scan(&competition.Id, &competition.Name, &competition.Year, &competition.ActiveReg)
		if err != nil {
			log.Println(err)
			return
		}
		allCompetitions = append(allCompetitions, competition)
	}

	if err = rows.Err(); err != nil {
		log.Println(err)
		return
	}

	// loop and display the result in the browser
	for _, event := range allCompetitions {
		fmt.Println(event.Name)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(allCompetitions)
}

//////////////////////////////////////////////////////////////////////////////////////////////

func GetCompetitions(w http.ResponseWriter, r *http.Request) {
	log.Println("Reached Get Competitions")

	// Open the db
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	// Open a connection to the database
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM competitions WHERE activereg = TRUE")
	if err != nil {
		log.Println("There was an error querying the db")
		log.Println(err)
	}
	log.Println("Called DB")
	defer rows.Close()

	// creates placeholder of the sandbox
	allCompetitions := make([]models.Competition, 0)

	// we loop through the values of rows
	for rows.Next() {
		competition := models.Competition{}
		err := rows.Scan(&competition.Id, &competition.Name, &competition.Year, &competition.ActiveReg)
		if err != nil {
			log.Println(err)
			return
		}
		allCompetitions = append(allCompetitions, competition)
	}

	if err = rows.Err(); err != nil {
		log.Println(err)
		return
	}

	// loop and display the result in the browser
	for _, event := range allCompetitions {
		fmt.Println(event.Name)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(allCompetitions)
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
	status := req.LStatus + req.FStatus
	if status == "ampro" {
		status = "proam"
	}
	log.Println(status)

	// Open the db
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	// Open a connection to the database
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	log.Println(status)
	log.Println(req.CompId)
	compint, err := strconv.Atoi(req.CompId)
	if err != nil {
		log.Println("Failed to convert CompId to int")
	}

	rows, err := db.Query("SELECT * FROM events WHERE dstatuses = $1 && compid = $2", status, compint)
	if err != nil {
		log.Println("There was an error querying the db")
		log.Println(err)
	}
	log.Println("Called DB")
	defer rows.Close()

	// creates placeholder of the sandbox
	allEvents := make([]models.Event, 0)

	// we loop through the values of rows
	for rows.Next() {
		event := models.Event{}
		err := rows.Scan(&event.Id, &event.CompId, &event.DStatuses, &event.Name, &event.Age, &event.Price, &event.Style)
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
