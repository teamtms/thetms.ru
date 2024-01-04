import { IFine } from '@/interfaces/Fine.interface'
import { request } from '../functions/request'
import type { IPost } from '../interfaces/Post.interface'
import { IUser } from '@/interfaces/User.interface'

const API = `https://www.fb24m.ru/tms/wp-json/wp/v2`

export const wordpress = {
	getPosts: async () => request<IPost[]>(`${API}/posts`),
	getPostBySlug: async (slug: string) => request<IPost[]>(`${API}/posts?slug=${slug}`),
	getFines: async () => request<IFine[]>(`${API}/fine`),
	getUserById: async (id: number) => request<IUser>(`${API}/profile/${id}`)
}
