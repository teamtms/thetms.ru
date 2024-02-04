import { IWpItem } from './WpItem.interface'

export interface IOrg extends IWpItem {
	acf: {
		owner: number
		photo: number
		revenue: number
		address: string
	}
}