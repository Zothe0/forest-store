import address from "@/api/backend-addr"

async function getReq(url) {
	try {
		url = address + url
		const response = await fetch(url)
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

export default getReq