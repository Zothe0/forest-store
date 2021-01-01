package middleware

import "net/http"

// AccessMiddleware - need for browser security.
func AccessMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer next.ServeHTTP(w, r)

		w.Header().Add("Access-Control-Allow-Origin", "*")

	})
}