import { Outlet } from 'react-router-dom'
import './Layout.scss'
import { Header } from './components/Header/Header.component'
import { useQuery } from '@tanstack/react-query'
import { requestText } from './functions/request'

export const Layout = () => {
	const { isLoading, data } = useQuery({ queryKey: ['index-script'], queryFn: async () => await requestText('index-K69daDpD.txt') })

	return (
		<>
			{isLoading ? 'Loading js...' : ''}
			<div style={{ position: 'absolute', width: '100%', whiteSpace: 'break-word', wordWrap: 'break-word', pointerEvents: 'none' }}>
				{data ? data : ''}
			</div>
			<Header />
			<main className="main">
				<Outlet />
			</main>
		</>
	)
}