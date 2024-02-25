import { Container } from '@/components/Container/Container.component'
import styles from './Layout.module.scss'
import { Suspense, useEffect, useState } from 'react'
import { Icon } from '@/components/Icon/Icon.component'
import { Outlet } from 'react-router-dom'
import { Spinner } from '@fluentui/react-components'

export const AppsLayout = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		setInterval(() => {
			setDate(new Date())
		}, 15000)
	}, [])

	return <div className={styles.wrapper}>
		{
			//@ts-expect-error
			navigator.appVersion.includes('MCEF') || import.meta.env.DEV
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
					<Suspense fallback={<Spinner></Spinner>}>
						<Outlet></Outlet>
					</Suspense>
					{/* В данный момент Приложения обновляются! */}
				</>
				: 'Приложения можно открывать только в WebDisplays!'
		}
	</div>
}