import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './Layout.component'
import { Container } from './components/Container/Container.component'
import { Provider } from './Provider.component'

const Passport = lazy(() => import('./pages/Passport/Passport.component'))
const Home = lazy(() => import('./pages/Home/Home.component'))
const Fines = lazy(() => import('./pages/Fines/Fines.component'))
const Article = lazy(() => import('./pages/Article/Article.component'))
const Documents = lazy(() => import('./pages/Documents/Documents.component'))
const SingleDocument = lazy(() => import('./pages/Documents/[slug]/SingleDocument.component'))
const Mods = lazy(() => import('./pages/Mods/Mods.component'))
const Tax = lazy(() => import('./pages/Tax/Tax.component'))
const Send = lazy(() => import('./pages/Send/Send.component'))
const Posts = lazy(() => import('./pages/Articles/[page]/Articles.component'))
const MetaArticles = lazy(() => import('./pages/Articles/Articles.component'))
const Addons = lazy(() => import('./pages/Addons/Addons.component'))
const Addon = lazy(() => import('./pages/Addon/Addon.component'))
const PaidWalk = lazy(() => import('./pages/PaidWalk/PaidWalk.component'))

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={Provider}>
					<Route Component={Layout}>
						<Route path="/profile/:username" Component={Passport} />
						<Route path="/fines" Component={Fines} />
						<Route path="/article/:slug" Component={Article} />
						<Route path="/archive/:page" Component={Home} />
						<Route path="/documents" Component={Documents} />
						<Route path="/documents/:slug" Component={SingleDocument} />
						<Route path="/mods" Component={Mods} />
						<Route path="/tax/:username" Component={Tax} />
						<Route path="/send" Component={Send} />
						<Route path="/articles/:page" Component={Posts} />
						<Route path="/articles" Component={MetaArticles} />
						<Route path="/addons" Component={Addons} />
						<Route path="/addons/:slug" Component={Addon} />
						<Route path="/" Component={Home} />
						<Route path="/*" element={<Container>404 not found</Container>} />
					</Route>
					<Route path="/paidwalk" Component={PaidWalk} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}