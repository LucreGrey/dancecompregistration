package main

import (
	"log"
	"net/http"

	"github.com/lucregrey/dancecompregistration/backend"

	"github.com/gorilla/mux"
)

func main() {
	log.Println("Application Started")
	router := mux.NewRouter()

	router.HandleFunc("/api/process", backend.ProcessRegistration)

	//router.Host("motownshowdown.dancecompregistration.co").Handler(http.FileServer(http.Dir("motownshowdown.dancecompregistration.com")))
	router.Host("motownshowdown.localhost").Handler(http.FileServer(http.Dir("motownshowdown.dancecompregistration.com")))

	//router.Host("loginpage.dancecompregistration.com").Handler(http.FileServer(http.Dir("loginpage")))
	router.Host("loginpage.localhost").Handler(http.FileServer(http.Dir("loginpage")))

	router.PathPrefix("/").Handler(http.FileServer(http.Dir("motownshowdown.dancecompregistration.com")))

	log.Panic(http.ListenAndServe(":80", router))
}
