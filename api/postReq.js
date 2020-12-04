import address from "@/api/backend-addr"

async function postReq(url, body = { data: 1 }) {
	try {
		url = address + url
		body = JSON.stringify(body)
		const payload = {
			method: "POST",
			body,
		}
		const response = await fetch(url, payload)
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

export default postReq
