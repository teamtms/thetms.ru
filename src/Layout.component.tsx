import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header.component'
import './Layout.scss'

export const Layout = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Outlet />
			</main>
		</>
	)
}