import { IFine } from '@/interfaces/Fine.interface'
import { request } from '../functions/request'
import type { IPost } from '../interfaces/Post.interface'
import { IUser } from '@/interfaces/User.interface'
import { IDocument } from '@/interfaces/Document.interface'

const API = `https://www.fb24m.ru/tms/wp-json/wp/v2`
export const TOKEN = 'fb24m/tms'

export const wordpress = {
	getPosts: async (page: number = 1) => request<IPost[]>(`${API}/posts?per_page=10&page=${page}`),
	getPostBySlug: async (slug: string) => request<IPost[]>(`${API}/posts?slug=${slug}`),
	searchDocuments: async (search: string) => request<IDocument[]>(`${API}/document?search=${search}`),
	getDocumentBySlug: async (slug: string) => request<IDocument[]>(`${API}/document?slug=${slug}`),
	getFines: async () => request<IFine[]>(`${API}/fine`),
	getUserById: async (id: number) => request<IUser>(`${API}/profile/${id}`)
}
