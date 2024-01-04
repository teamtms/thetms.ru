import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout.component'

const Passport = lazy(() => import('./pages/Passport/Passport.component'))
const Home = lazy(() => import('./pages/Home/Home.component'))
const Fines = lazy(() => import('./pages/Fines/Fines.component'))
const Article = lazy(() => import('./pages/Article/Article.component'))

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={Layout}>
					<Route path="/passport/:username" Component={Passport} />
					<Route path="/fines" Component={Fines} />
					<Route path="/post/:slug" Component={Article} />
					<Route path="/" Component={Home} />
					<Route path="/*" element={<>404 not found</>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}