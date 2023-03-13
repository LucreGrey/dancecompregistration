package main

import (
	"net/http"
)

func resourceHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, r.URL.Path[1:])
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "home")
}
