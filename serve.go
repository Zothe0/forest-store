package main

import (
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"gopkg.in/gomail.v2"
)

func main() {

	app := newServer(3000)

	// go serveMail()

	err := app.LaunchServer()
	if err != nil {
		log.Fatal(err)
	}
}

// func serveMail(){
// 	router := mux.NewRouter()
// 	router.HandleFunc("/api/mail", mailHandler).Methods(http.MethodPost)
// 	http.ListenAndServeTLS(fmt.Sprint(":", 3000), "cert.pem", "key.pem", router)
// }

type Server struct {
	port   int
	router *mux.Router
}

func newServer(port int) *Server {

	router := mux.NewRouter()
	router.Use(AccessMiddleware)
	router.HandleFunc("/api/mail", mailHandler).Methods(http.MethodPost)
	dir := "./dist/"
	router.PathPrefix("/").Handler(http.FileServer(http.Dir(dir)))

	return &Server{
		port:   port,
		router: router,
	}
}

// LaunchServer method
func (s *Server) LaunchServer() error {

	log.Print("Serving SPA on port ", s.port, "...")

	err := http.ListenAndServeTLS(fmt.Sprint(":", s.port), "cert.pem", "key.pem", s.router)

	// err := http.ListenAndServe(fmt.Sprint(":", s.port), s.router)
	if err != nil {
		return err
	}
	return nil
}

type response struct {
	Ok            bool   `json:"ok"`
	RequestMethod string `json:"requestMethod"`
}

type request struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
	Question string `json:"question"`
}

func mailHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")

	response := &response{
		Ok:            true,
		RequestMethod: r.Method,
	}
	byteResponse, err := json.Marshal(response)
	if err != nil {
		log.Fatal(err)
	}

	defer r.Body.Close()

	body := &request{}
	err = json.NewDecoder(r.Body).Decode(body)
	if err != nil {
		log.Fatal(err)
	}
	sendMail(body)

	w.WriteHeader(202)
	w.Write(byteResponse)
}

func AccessMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer next.ServeHTTP(w, r)

		w.Header().Add("Access-Control-Allow-Origin", "*")

	})
}

type Data struct {
	OrderCount int `json:"orderCount"`
}

func getOrderCount() int {
	filename, err := os.Open("./data.json")
	if err != nil {
		log.Fatal(err)
	}
	defer filename.Close()

	data, err := ioutil.ReadAll(filename)

	if err != nil {
		log.Fatal(err)
	}
	parseData := &Data{}

	err = json.Unmarshal(data, parseData)
	if err != nil {
		log.Fatal(err)
	}
	return parseData.OrderCount
}

func incrementOrderCount(counter int) {
	counter = counter + 1
	data := &Data{
		OrderCount: counter,
	}

	d, err := json.MarshalIndent(data, "", "	")
	if err != nil {
		log.Fatal(err)
	}
	ioutil.WriteFile("./data.json", d, 0644)
}

func sendMail(data *request) {

	count := getOrderCount()

	m := gomail.NewMessage()
	m.SetHeader("From", "z0the@yandex.ru")                        // z0the@yandex.ru dedwithin@gmail.com
	m.SetAddressHeader("Cc", "lesnye.radosti@gmail.com", "Store") // lesnye.radosti@gmail.com
	m.SetHeader("Subject", fmt.Sprint("Заказ №", " ", count))
	m.SetBody("text/html", fmt.Sprint(
		"<p><b>Имя клиента:</b>", data.Name, "</p>",
		"<p><b>Почта клиента:</b>", data.Email, "</p>",
		"<p><b>Телефон клиента:</b>", data.Phone, "</p>",
		"<p><b>Заказ клиента:</b>", data.Question, "</p>"))

	d := gomail.NewDialer("smtp.yandex.ru", 465, "z0the@yandex.ru", "timzzqesdrfhknfs") //smtp.yandex.ru smtp.gmail.com
	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	// Send the email to Store
	if err := d.DialAndSend(m); err != nil {
		log.Fatal(err)
	}
	log.Print("Mail sent")
	incrementOrderCount(count)
}
