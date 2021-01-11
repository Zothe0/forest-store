package main

import (
	"fmt"
	"log"
	"net/http"

	"backend/handlers"
	"backend/middleware"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"github.com/kabukky/httpscerts"
	prerender "github.com/tampajohn/goprerender"
	// "golang.org/x/crypto/acme/autocert"
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

	certificateCheck()
	err := http.ListenAndServe(fmt.Sprint(":", s.port), s.negroni)
	// err := http.ListenAndServeTLS(fmt.Sprint(":", s.port), "cert.pem", "key.pem", s.negroni)
	if err != nil {
		return err
	}
	return nil
}

func certificateCheck() {

	// certManager := autocert.Manager{
	// 	Prompt:     autocert.AcceptTOS,
	// 	HostPolicy: autocert.HostWhitelist("lesnye-radosti.ru"), //Your domain here
	// 	Cache:      autocert.DirCache("certs"),            //Folder for storing certificates
	// }

	err := httpscerts.Check("cert.pem", "key.pem")
	// Если он недоступен, то генерируем новый.
	if err != nil {
		err = httpscerts.Generate("cert.pem", "key.pem", "127.0.0.1:3000")
		if err != nil {
			log.Fatal("Ошибка: Не можем сгенерировать https сертификат.")
		}
	}
}
