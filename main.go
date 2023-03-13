package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/motownshowdown/", resourceHandler)
	http.HandleFunc("/loginpage/", resourceHandler)
	http.HandleFunc("/", viewHandler)
	http.ListenAndServe(":8080", nil)
}
