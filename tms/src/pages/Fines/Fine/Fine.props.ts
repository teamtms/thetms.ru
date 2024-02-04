import type { HTMLAttributes } from 'react'
import { IFine } from '@/interfaces/Fine.interface'

export interface FineProps extends HTMLAttributes<HTMLDivElement> {
	fine: IFine
}
