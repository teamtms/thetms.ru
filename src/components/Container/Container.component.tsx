import styles from './Container.module.scss'
import type { HTMLAttributes } from 'react'

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={`${styles.container} ${className}`} {...props}></div>
	)
}
