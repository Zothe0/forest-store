package handlers

import (
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"gopkg.in/gomail.v2"
)

type response struct {
	Ok            bool   `json:"ok"`
	RequestMethod string `json:"requestMethod"`
}

type requestBody struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
	Question string `json:"question"`
}

// MailHandler - handle mail sending
func MailHandler(w http.ResponseWriter, r *http.Request) {
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

	body := &requestBody{}
	err = json.NewDecoder(r.Body).Decode(body)
	if err != nil {
		log.Fatal(err)
	}
	sendMail(body)

	w.WriteHeader(202)
	w.Write(byteResponse)
}

type fileData struct {
	OrderCount int `json:"orderCount"`
}

func getOrderCount() int {
	filename, err := os.Open("../data/orderCount.json")
	if err != nil {
		log.Fatal(err)
	}
	defer filename.Close()

	data, err := ioutil.ReadAll(filename)

	if err != nil {
		log.Fatal(err)
	}
	parseData := &fileData{}

	err = json.Unmarshal(data, parseData)
	if err != nil {
		log.Fatal(err)
	}
	return parseData.OrderCount
}

func incrementOrderCount(counter int) {
	counter = counter + 1
	data := &fileData{
		OrderCount: counter,
	}

	d, err := json.MarshalIndent(data, "", "	")
	if err != nil {
		log.Fatal(err)
	}
	ioutil.WriteFile("../data/orderCount.json", d, 0644)
}

func sendMail(data *requestBody) {

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
		log.Println(err)
	}
	log.Print("Mail sent")
	incrementOrderCount(count)
}
