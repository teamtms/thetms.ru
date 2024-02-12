import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.scss'
import { FluentProvider, Spinner } from '@fluentui/react-components'
import { tmsDarkTheme, tmsLightTheme } from './themes/tmsTheme'
import { Header } from './components/Header/Header.component'

const queryClient = new QueryClient()

export const Layout = () => {
	return (
		<FluentProvider className={`provider ${localStorage.getItem('disable-nedodayn-theme')}`} theme={localStorage.getItem('color-scheme') === 'dark' ? tmsDarkTheme : tmsLightTheme}>
			<QueryClientProvider client={queryClient}>
				<Header />
				<Suspense fallback={<Spinner />}>
					<main className="main">
						<Outlet />
					</main>
				</Suspense>
			</QueryClientProvider>
		</FluentProvider>
	)
}