export const request = async<T>(url: string): Promise<T> => {
	const response = await fetch(url)
	const json: T = await response.json()

	return json
}

export const requestText = async (url: string): Promise<string> => {
	const response = await fetch(url)
	const text: string = await response.text()

	return text
}
