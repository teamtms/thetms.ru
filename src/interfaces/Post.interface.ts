export interface IPost {
	id: number
	tags: string
	author: number
	categories: number
	content: { rendered: string }
	excerpt: { rendered: string }
	featured_media: number
	slug: string
	title: { rendered: string }
}