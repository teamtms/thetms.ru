import { HTMLAttributes } from 'react'

export interface DownloadProps extends HTMLAttributes<HTMLDivElement> {
	fileId: number
}