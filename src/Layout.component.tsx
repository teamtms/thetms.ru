import { Outlet } from 'react-router-dom'
import './Layout.scss'
import { Header } from './components/Header/Header.component'

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