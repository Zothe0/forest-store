package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main(){

	app := newServer(3000)

	err := app.LaunchServer()
	if err != nil{
		log.Fatal(err)
	}
}

type Server struct{
	port int
	router *mux.Router
}
func newServer(port int) *Server{

	router := mux.NewRouter()
	dir := "./dist/"
	router.PathPrefix("/").Handler(http.FileServer(http.Dir(dir)))

	return &Server{
		port: port,
		router: router,
	}
}
// LaunchServer method
func (s *Server) LaunchServer() error {

	log.Print("Serving SPA on port ", s.port, "...")

	err := http.ListenAndServe(fmt.Sprint(":", s.port), s.router)
	if err != nil {
		return err
	}
	return nil
}