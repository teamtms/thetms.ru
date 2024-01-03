import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const queryClient = new QueryClient()

export const Layout = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<>Загрузка необходимых для страницы компонентов...</>}>
				ТМС сайт
				<main className="main">
					<Outlet />
				</main>
			</Suspense>
		</QueryClientProvider>
	)
}