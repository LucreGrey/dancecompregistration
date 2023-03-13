package main

import (
	"net/http"
	"github.com/lucregrey/dancecompregistration/backend"
)

func main() {
	http.HandleFunc("/motownshowdown/", backend.resourceHandler)
	http.HandleFunc("/loginpage/", backend.resourceHandler)
	http.HandleFunc("/", backend.viewHandler)
	http.ListenAndServe(":8080", nil)
}
