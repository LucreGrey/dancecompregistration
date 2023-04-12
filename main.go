package main

import (
	"net/http"

	"github.com/lucregrey/dancecompregistration/backend"
)

func main() {
	http.HandleFunc("/prestige/", backend.ResourceHandler)
	http.HandleFunc("/loginpage/", backend.ResourceHandler)

	fs := http.FileServer(http.Dir("./registration"))
	http.Handle("/", fs)

	http.HandleFunc("/api/getevents", backend.GetEvents)
	http.HandleFunc("/api/getcompetitions", backend.GetCompetitions)

	http.ListenAndServe(":8080", nil)
}
