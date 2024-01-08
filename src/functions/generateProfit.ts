import { wordpress } from '@/services/wordpress'

export const generateProfit = async (ownerName: string) => {
	const [user] = await wordpress.getUserByName(ownerName)
	const orgs = user.acf.owner_of

	const result: { title: string, profit: number }[] = []
	let sum = 0

	for (const i in orgs) {
		const orgId = orgs[i]
		const org = await wordpress.getOrgById(orgId)

		result[i] = {
			title: org.title.rendered,
			profit: Number(`${Math.floor(Math.random() * 10) === 1 ? '-' : '+'}${Math.floor(Math.floor(Math.random() * org.acf.revenue) / 100)}00`)
		}

		sum += result[i].profit
	}

	return { orgs: result, sum }
}