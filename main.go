package main

import (
	"net/http"

	"github.com/lucregrey/dancecompregistration/backend"
)

func main() {
	http.HandleFunc("/motownshowdown/", backend.ResourceHandler)
	http.HandleFunc("/loginpage/", backend.ResourceHandler)
	http.HandleFunc("/", backend.HomeHandler)

	http.HandleFunc("/api/getevents", backend.GetEvents)

	http.ListenAndServe(":8080", nil)
}
