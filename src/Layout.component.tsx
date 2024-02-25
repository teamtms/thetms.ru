import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header.component'
import './Layout.scss'
import { Suspense } from 'react'
import { Spinner } from '@fluentui/react-components'

export const Layout = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<Spinner />}>
				<main className="main">
					<Outlet />
				</main>
			</Suspense>
		</>
	)
}