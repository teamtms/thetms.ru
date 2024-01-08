import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout.component'

const Passport = lazy(() => import('./pages/Passport/Passport.component'))
const Home = lazy(() => import('./pages/Home/Home.component'))
const Fines = lazy(() => import('./pages/Fines/Fines.component'))
const Article = lazy(() => import('./pages/Article/Article.component'))
const Documents = lazy(() => import('./pages/Documents/Documents.component'))
const SingleDocument = lazy(() => import('./pages/Documents/[slug]/SingleDocument.component'))
const Mods = lazy(() => import('./pages/Mods/Mods.component'))
const Tax = lazy(() => import('./pages/Tax/Tax.component'))

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={Layout}>
					<Route path="/profile/:username" Component={Passport} />
					<Route path="/fines" Component={Fines} />
					<Route path="/post/:slug" Component={Article} />
					<Route path="/archive/:page" Component={Home} />
					<Route path="/documents" Component={Documents} />
					<Route path="/document/:slug" Component={SingleDocument} />
					<Route path="/mods" Component={Mods} />
					<Route path="/tax/:username" Component={Tax} />
					<Route path="/" Component={Home} />
					<Route path="/*" element={<>404 not found</>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}