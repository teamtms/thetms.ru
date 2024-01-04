import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.scss'
import { FluentProvider, Spinner, webDarkTheme, webLightTheme } from '@fluentui/react-components'
// import { Container } from './components/Container/Container.component'

const Header = lazy(() => import('@/components/Header/Header.component'))

const queryClient = new QueryClient()

export const Layout = () => {
	return (
		<FluentProvider className="provider" theme={localStorage.getItem('color-scheme') === 'dark' ? webDarkTheme : webLightTheme}>
			<QueryClientProvider client={queryClient}>
				<Suspense fallback={<Spinner />}>
					<Header />
					<main className="main">
						<Outlet />
					</main>
				</Suspense>
			</QueryClientProvider>
		</FluentProvider>
	)
}