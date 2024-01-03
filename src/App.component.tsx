import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout.component'
import './globals.scss'

const Passport = lazy(() => import('./pages/Passport/Passport.component'))

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={Layout}>
					<Route path="/passport/:username" Component={Passport} />
					<Route path="/*" element={<>404 not found</>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}