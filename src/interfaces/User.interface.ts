export interface IUser {
	id: number
	title: { rendered: string }
	acf: {
		role: string
		fraction: string
		balance: string
		status: string
		avatar: number
		description: string
		birth_date: string
		married: boolean
		owner_of: number[]
	}
}