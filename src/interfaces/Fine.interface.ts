export interface IFine {
	id: number
	title: { rendered: string }
	content: { rendered: string }
	acf: {
		amount: number
		reciever: number
	}
}