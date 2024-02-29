export const request = async<T>(url: string, init?: RequestInit): Promise<T> => {
	const response = await fetch(url, init)
	const json: T = await response.json()

	return json
}

export const requestText = async (url: string, init?: RequestInit): Promise<string> => {
	const response = await fetch(url, init)
	const text: string = await response.text()

	return text
}
