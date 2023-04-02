package main

import (
	"net/http"

	"github.com/lucregrey/dancecompregistration/backend"
)

func main() {
	http.HandleFunc("/prestige/", backend.ResourceHandler)
	http.HandleFunc("/loginpage/", backend.ResourceHandler)
	http.HandleFunc("/", backend.HomeHandler)

	http.HandleFunc("/api/getevents", backend.GetEvents)
	http.HandleFunc("/api/getcompetitions", backend.GetCompetitions)
	http.HandleFunc("/api/getcompid", backend.GetCompID)

	http.ListenAndServe(":8080", nil)
}
