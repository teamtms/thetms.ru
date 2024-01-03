export const request = async<T>(url: string): Promise<T> => {
	const response = await fetch(url)
	const json: T = await response.json()

	return json
}
