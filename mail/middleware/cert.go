package main

import (
    "fmt"
    "github.com/kabukky/httpscerts"
    "log"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Привет")
}

func main() {
    // Проверяем, доступен ли cert файл.
    err := httpscerts.Check("cert.pem", "key.pem")
    // Если он недоступен, то генерируем новый.
    if err != nil {
        err = httpscerts.Generate("cert.pem", "key.pem", "127.0.0.1:8081")
        if err != nil {
            log.Fatal("Ошибка: Не можем сгенерировать https сертификат.")
        }
    }
    http.HandleFunc("/", handler)
    http.ListenAndServeTLS(":8081", "cert.pem", "key.pem", nil)
}