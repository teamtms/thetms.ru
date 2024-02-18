import { Container } from '@/components/Container/Container.component'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import { useEffect, useState } from 'react'
import { Icon } from '@/components/Icon/Icon.component'

export const AppsLayout = () => {
	const [date, setDate] = useState(new Date())


	useEffect(() => {
		setInterval(() => {
			setDate(new Date())
		}, 3000)
	}, [])

	return <div className={styles.wrapper}>
		{navigator.appVersion.includes('MCEF')
			? <>
				<Container className={styles.panel}>
					<div className={styles.operator}>
						МТС 5G
					</div>
					<div className={styles.indicators}>
						<Icon>wifi</Icon>
						<Icon>bluetooth</Icon>
						<Icon>battery_5_bar</Icon>
						<div className={styles.clock}>
							{date.getHours()}:{date.getMinutes()}
						</div>
						<Icon>volume_up</Icon>
					</div>
				</Container>
				<Outlet></Outlet></>
			: 'Приложения можно открывать только в WebDisplays!'}
	</div>
}