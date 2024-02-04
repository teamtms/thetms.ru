import { request } from '@/functions/request'
import type { IRelease } from '@/interfaces/Release.interface'

export const github = {
	getModpackReleases: () => request<IRelease[]>('https://api.github.com/repos/teamtms/mods/releases')
}