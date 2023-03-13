package backend

import (
	"html/template"
	"net/http"
	"os"
	"time"
)

func resourceHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, r.URL.Path[1:])
}

///////////////////////////////////////////////////

type Page struct {
	Hostname string
	Year     string
}

func loadPage() (*Page, error) {
	t := time.Now()
	hostname, err := os.Hostname()
	if err != nil {
		panic(err)
	}
	return &Page{Hostname: hostname, Year: t.Format("2006")}, nil
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
	p, _ := loadPage()
	t, _ := template.ParseFiles("index.tpl")
	t.Execute(w, p)
}
