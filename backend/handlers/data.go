package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type responseData struct {
	Text string `json:"text"`
}

// DataHandler ...
func DataHandler(w http.ResponseWriter, r *http.Request) {
	params := r.URL.Query()
	name := params.Get("name")
	fContent, err := ioutil.ReadFile(fmt.Sprint("data/productTexts/", name, ".txt"))
	if err != nil {
		log.Println("Error: ", err)
	}
	rd := &responseData{
		Text: string(fContent),
	}
	data, err := json.MarshalIndent(rd, "", "	")
	if err != nil {
		log.Println("Error: ", err)
	}
	w.WriteHeader(202)
	w.Write(data)
}
