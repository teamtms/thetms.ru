import { request } from '../functions/request'
import type { IPost } from '../interfaces/Post.interface'

const API = `https://www.fb24m.ru/tms/wp-json/wp/v2`

export const wordpress = {
	getPosts: async () => request<IPost[]>(`${API}/posts`)
}
