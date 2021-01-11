package main

import (
	"fmt"
	"log"
	"net/http"

	"backend/handlers"
	"backend/middleware"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	prerender "github.com/tampajohn/goprerender"
)

func main() {

	app := newServer(3001)

	err := app.launchServer()
	if err != nil {
		log.Fatal(err)
	}
}

type server struct {
	port    int
	negroni *negroni.Negroni
}

func newServer(port int) *server {
	return &server{
		port:    port,
		negroni: configureRouter(),
	}
}

func configureRouter() *negroni.Negroni {
	router := mux.NewRouter()

	n := negroni.New(prerender.NewOptions().NewPrerender())
	router.Use(middleware.AccessMiddleware)
	router.HandleFunc("/api/mail", handlers.MailHandler).Methods(http.MethodPost)
	router.HandleFunc("/api/product", handlers.DataHandler).Methods(http.MethodGet)

	dir := "../dist/"
	router.PathPrefix("/").Handler(http.FileServer(http.Dir(dir)))
	n.UseHandler(router)

	return n
}

func (s *server) launchServer() error {
	log.Print("Serving SPA on port ", s.port, "...")

	err := http.ListenAndServe(fmt.Sprint(":", s.port), s.negroni)
	if err != nil {
		return err
	}
	return nil
}
