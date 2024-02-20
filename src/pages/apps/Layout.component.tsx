import { Container } from '@/components/Container/Container.component'
import styles from './Layout.module.scss'
import { useEffect, useState } from 'react'
import { Icon } from '@/components/Icon/Icon.component'
import { Outlet } from 'react-router-dom'

export const AppsLayout = () => {
	const [date, setDate] = useState(new Date())
	const [key, setKey] = useState('')
	const [value, setValue] = useState('')
	const [access, setAccess] = useState(false)

	useEffect(() => {
		setInterval(() => {
			setDate(new Date())

			setKey('0aa67d66-5d52-4d25-88bb-c41fa7a5d909')
			setValue('94afbbd0-8495-401a-bf81-f67e6dfc3986')
			setAccess(localStorage[key] === value)
		}, 15000)
	}, [])

	return <div className={styles.wrapper}>
		{
			navigator.appVersion.includes('MCEF') || access
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
					<Outlet></Outlet>
					{/* В данный момент Приложения обновляются! */}
				</>
				: 'Приложения можно открывать только в WebDisplays!'
		}
	</div>
}