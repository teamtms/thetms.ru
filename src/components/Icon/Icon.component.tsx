import { HTMLAttributes } from 'react'
import styles from './Icon.module.scss'

export const Icon = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<span className={`${styles.icon} ${className}`} {...props}></span>
	)
}