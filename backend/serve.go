package main

import (
	"fmt"
	"log"
	"net/http"

	"backend/mail"
	"backend/middleware"

	"github.com/gorilla/mux"
	"github.com/kabukky/httpscerts"
	"github.com/tampajohn/goprerender"
	"github.com/codegangsta/negroni"
)

func main() {

	app := newServer(3000)

	err := app.launchServer()
	if err != nil {
		log.Fatal(err)
	}
}

type server struct {
	port   int
	negroni *negroni.Negroni
}

func newServer(port int) *server {
	return &server{
		port:   port,
		negroni: configureRouter(),
	}
}

func configureRouter() *negroni.Negroni{
	router := mux.NewRouter()

	n := negroni.New(prerender.NewOptions().NewPrerender())
	router.Use(middleware.AccessMiddleware)
	router.HandleFunc("/api/mail", mail.Handler).Methods(http.MethodPost)
	dir := "./dist/"
	router.PathPrefix("/").Handler(http.FileServer(http.Dir(dir)))
	n.UseHandler(router)

	return n
}

func (s *server) launchServer() error {
	log.Print("Serving SPA on port ", s.port, "...")

	certificateCheck()
	err := http.ListenAndServeTLS(fmt.Sprint(":", s.port), "cert.pem", "key.pem", s.negroni)
	if err != nil {
		return err
	}
	return nil
}

func certificateCheck() {
	err := httpscerts.Check("cert.pem", "key.pem")
	// Если он недоступен, то генерируем новый.
	if err != nil {
		err = httpscerts.Generate("cert.pem", "key.pem", "127.0.0.1:3000")
		if err != nil {
			log.Fatal("Ошибка: Не можем сгенерировать https сертификат.")
		}
	}
}
