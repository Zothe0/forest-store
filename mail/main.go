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

func AccessMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer next.ServeHTTP(w, r)

		w.Header().Add("Access-Control-Allow-Origin", "*")

	})
}

func main() {

	router := mux.NewRouter()
	router.Use(mux.CORSMethodMiddleware(router))
	router.Use(AccessMiddleware)

	router.HandleFunc("/api/foo", fooHandler).Methods(http.MethodPost, http.MethodOptions)

	log.Print("Starting server...")
	err := http.ListenAndServe(":5000", router)
	if err != nil {
		log.Fatal(err)
	}
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

func fooHandler(w http.ResponseWriter, r *http.Request) {

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

// Data ...
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
	m.SetHeader("From", "dedwithin@gmail.com")
	m.SetAddressHeader("Cc", "lesnye.radosti@gmail.com", "Store")
	m.SetHeader("Subject", fmt.Sprint("Заказ №", " ", count))
	m.SetBody("text/html", fmt.Sprint(
		"<p><b>Имя клиента:</b>", data.Name, "</p>",
		"<p><b>Почта клиента:</b>", data.Email, "</p>",
		"<p><b>Телефон клиента:</b>", data.Phone, "</p>",
		"<p><b>Заказ клиента:</b>", data.Question, "</p>"))

	d := gomail.NewDialer("smtp.gmail.com", 587, "dedwithin@gmail.com", "Rjxtnrjdbkmz1")
	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	// Send the email to Store
	if err := d.DialAndSend(m); err != nil {
		log.Fatal(err)
	}
	log.Print("Mail sent")
	incrementOrderCount(count)
}
