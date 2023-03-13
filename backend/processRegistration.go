package backend

import (
	"log"
	"net/http"
)

func ProcessRegistration(w http.ResponseWriter, r *http.Request) {
	log.Println("Reached Process Registration")

	w.WriteHeader(http.StatusOK)
}
