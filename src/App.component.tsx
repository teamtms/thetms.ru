import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout.component'

const Passport = lazy(() => import('./pages/Passport/Passport.component'))
const Home = lazy(() => import('./pages/Home/Home.component'))

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={Layout}>
					<Route path="/passport/:username" Component={Passport} />
					<Route path="/" Component={Home} />
					<Route path="/*" element={<>404 not found</>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}