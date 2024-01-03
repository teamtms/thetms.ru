import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'

const queryClient = new QueryClient()

export const Layout = () => {
	return (
		<QueryClientProvider client={queryClient}>
			ТМС сайт
			<main className="main">
				<Outlet />
			</main>
		</QueryClientProvider>
	)
}