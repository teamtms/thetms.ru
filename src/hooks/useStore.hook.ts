import { create } from 'zustand'

export const useStore = create<{
	siteTitle: string,
	setSiteTitle: (state: string) => void
}>((set) => ({
	siteTitle: '',
	setSiteTitle: (value) => set(() => ({ siteTitle: value }))
}))
