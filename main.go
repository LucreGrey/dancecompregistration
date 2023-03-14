package main

import (
	"net/http"

	"github.com/lucregrey/dancecompregistration/backend"
)

func main() {
	http.HandleFunc("/motownshowdown/", backend.ResourceHandler)
	http.HandleFunc("/loginpage/", backend.ResourceHandler)
	http.HandleFunc("/", backend.HomeHandler)
	http.ListenAndServe(":8080", nil)
}
