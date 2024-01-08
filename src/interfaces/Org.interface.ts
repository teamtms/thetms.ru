import { IPost } from './Post.interface'

export interface IOrg extends IPost {
	acf: {
		owner: number
		photo: number
		revenue: number
		address: string
	}
}