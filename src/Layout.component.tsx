import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { Suspense } from 'react'
// import { Outlet } from 'react-router-dom'
import './Layout.scss'
import { FluentProvider, /*Spinner*/ } from '@fluentui/react-components'
import { tmsDarkTheme, tmsLightTheme } from './themes/tmsTheme'
// import { Header } from './components/Header/Header.component'

const queryClient = new QueryClient()

export const Layout = () => {
	return (
		<FluentProvider className="provider" theme={localStorage.getItem('color-scheme') === 'dark' ? tmsDarkTheme : tmsLightTheme}>
			<QueryClientProvider client={queryClient}>
				<pre>
					React client-side error.<br />
					in wordpress.service.ts<br />
					in wordpress<br />
					<br />
					{"import {IFine} from '@/interfaces/Fine.interface'"}<br />
					{"import {request} from '../functions/request'"}<br />
					{"import type {IPost} from '../interfaces/Post.interface'"}<br />
					{"import {IUser} from '@/interfaces/User.interface'"}<br />
					{"import {IDocument} from '@/interfaces/Document.interface'"}<br />
					<br />
					const API = `https://www.fb24m.ru/tms/wp-json/wp/v2`<br />
					export const TOKEN = 'fb24m/tms' {"<-"} HERE <br />
					<br />
					export const wordpress =
					{"getPosts: async (page: number = 1) => request<IPost[]>(`${API}/posts?per_page=10&page=${page}`),"} <br />
					{"getPostBySlug: async (slug: string) => request<IPost[]>(`${API}/posts?slug=${slug}`),"} <br />
					{"searchDocuments: async (search: string) => request<IDocument[]>(`${API}/document?search=${search}`),"} <br />
					{"getDocumentBySlug: async (slug: string) => request<IDocument[]>(`${API}/document?slug=${slug}`),"} <br />
					{"getFines: async () => request<IFine[]>(`${API}/fine`),"} <br />
					{"getUserById: async (id: number) => request<IUser>(`${API}/profile/${id}`)"} <br />
					<br />
					401 authentification required
					<br /><br />
					full building logs:
					<br />
					<br />
					<br />[19:56:29.923] Running build in Washington, D.C., USA (East) – iad1
					<br />[19:56:30.028] Cloning github.com/teamtms/thetms.ru (Branch: main, Commit: 1cba1c0)
					<br />[19:56:30.351] Cloning completed: 322.889ms
					<br />[19:56:32.254] Restored build cache
					<br />[19:56:32.336] Running "vercel build"
					<br />[19:56:32.810] Vercel CLI 33.0.2
					<br />[19:56:33.437] Installing dependencies...
					<br />[19:56:33.741] yarn install v1.22.17
					<br />[19:56:33.805] [1/4] Resolving packages...
					<br />[19:56:34.063] success Already up-to-date.
					<br />[19:56:34.067] Done in 0.33s.
					<br />[19:56:34.083] Running "yarn run build"
					<br />[19:56:34.260] yarn run v1.22.17
					<br />[19:56:34.285] $ tsc && vite build
					<br />[19:56:38.812] [36mvite v5.0.10 [32mbuilding for production...[36m[39m
					<br />[19:56:38.842] transforming...
					<br />					[19:56:45.053] [32m✓[39m 1727 modules transformed.
					<br />				[19:56:45.337] rendering chunks...
					<br />[19:56:45.497] computing gzip size...
					<br />[19:56:45.523] [2mdist/[22m[32mindex.html                                   [39m[1m[2m  0.56 <br />kB<br />[22m[1m[22m[2m │ gzip:   0.35 kB[22m
					<br />[19:56:45.523] [2mdist/[22m[2massets/[22m[35mFines-dbBy5hnI.css                    [39m[1m[2m  <br />0.06 kB[22m[1m[22m[2m │ gzip:   0.08 kB[22m
					<br />[19:56:45.523] [2mdist/[22m[2massets/[22m[35mDocuments-a4K9fLUp.css                [39m[1m[2m  <br />0.07 kB[22m[1m[22m[2m │ gzip:   0.08 kB[22m
					<br />[19:56:45.523] [2mdist/[22m[2massets/[22m[35mSingleDocument-SKM2aRW-.css           [39m[1m[2m  0.27 kB[22m[1m[22m[2m │ gzip:   0.17 kB[22m
					<br />[19:56:45.524] [2mdist/[22m[2massets/[22m[35mArticle-EpzNqgS8.css                  [39m[1m[2m  0.32 kB[22m[1m[22m[2m │ gzip:   0.19 kB[22m
					<br />[19:56:45.524] [2mdist/[22m[2massets/[22m[35mMods-a4jXEYLz.css                     [39m[1m[2m  0.40 kB[22m[1m[22m[2m │ gzip:   0.24 kB[22m
					<br />[19:56:45.524] [2mdist/[22m[2massets/[22m[35mPassport-y191_f8u.css                 [39m[1m[2m  0.45 kB[22m[1m[22m[2m │ gzip:   0.30 kB[22m
					<br />[19:56:45.524] [2mdist/[22m[2massets/[22m[35mHome-2mXsP6MP.css                     [39m[1m[2m  0.53 kB[22m[1m[22m[2m │ gzip:   0.30 kB[22m
					<br />[19:56:45.524] [2mdist/[22m[2massets/[22m[35mindex-0FIvLnPo.css                    [39m[1m[2m  0.69 kB[22m[1m[22m[2m │ gzip:   0.37 kB[22m
					<br />[19:56:45.525] [2mdist/[22m[2massets/[22m[36mrequest-4KY16-7R.js                   [39m[1m[2m  0.06 kB[22m[1m[22m[2m │ gzip:   0.08 kB[22m
					<br />[19:56:45.525] [2mdist/[22m[2massets/[22m[36mButton-sBM24Rew.js                    [39m[1m[2m  0.25 kB[22m[1m[22m[2m │ gzip:   0.20 kB[22m
					<br />[19:56:45.525] [2mdist/[22m[2massets/[22m[36mwordpress-GM7xazX4.js                 [39m[1m[2m  0.41 kB[22m[1m[22m[2m │ gzip:   0.26 kB[22m
					<br />[19:56:45.525] [2mdist/[22m[2massets/[22m[36mTitle2-cdurgG1P.js                    [39m[1m[2m  0.43 kB[22m[1m[22m[2m │ gzip:   0.30 kB[22m
					<br />[19:56:45.525] [2mdist/[22m[2massets/[22m[36mTitle3-tuf6HRUN.js                    [39m[1m[2m  0.44 kB[22m[1m[22m[2m │ gzip:   0.30 kB[22m
					<br />[19:56:45.525] [2mdist/[22m[2massets/[22m[36mWpImage.component--mKxeICr.js         [39m[1m[2m  0.51 kB[22m[1m[22m[2m │ gzip:   0.37 kB[22m
					<br />[19:56:45.526] [2mdist/[22m[2massets/[22m[36mSingleDocument.component-S8ze_kcd.js  [39m[1m[2m  1.06 kB[22m[1m[22m[2m │ gzip:   0.65 kB[22m
					<br />[19:56:45.526] [2mdist/[22m[2massets/[22m[36mPassportCard.component--xfdCqPc.js    [39m[1m[2m  1.31 kB[22m[1m[22m[2m │ gzip:   0.75 kB[22m
					<br />[19:56:45.526] [2mdist/[22m[2massets/[22m[36mFines.component-DtF4xemT.js           [39m[1m[2m  1.36 kB[22m[1m[22m[2m │ gzip:   0.83 kB[22m
					<br />[19:56:45.526] [2mdist/[22m[2massets/[22m[36mPassport.component-qq6T8fbo.js        [39m[1m[2m  1.42 kB[22m[1m[22m[2m │ gzip:   0.74 kB[22m
					<br />[19:56:45.526] [2mdist/[22m[2massets/[22m[36mHome.component-xKdOEFHQ.js            [39m[1m[2m  2.41 kB[22m[1m[22m[2m │ gzip:   1.22 kB[22m
					<br />[19:56:45.526] [2mdist/[22m[2massets/[22m[36mArticle.component-6ZWfaDGD.js         [39m[1m[2m  9.64 kB[22m[1m[22m[2m │ gzip:   3.42 kB[22m
					<br />[19:56:45.527] [2mdist/[22m[2massets/[22m[36mMods.component-iWHBslcQ.js            [39m[1m[2m  9.68 kB[22m[1m[22m[2m │ gzip:   3.50 kB[22m
					<br />[19:56:45.527] [2mdist/[22m[2massets/[22m[36mDocuments.component-z0AGCwmZ.js       [39m[1m[2m 14.55 kB[22m[1m[22m[2m │ gzip:   4.51 kB[22m
					<br />[19:56:45.527] [2mdist/[22m[2massets/[22m[36museButtonStyles.styles-KWKHtYnQ.js    [39m[1m[2m 26.82 kB[22m[1m[22m[2m │ gzip:   6.14 kB[22m
					<br />[19:56:45.527] [2mdist/[22m[2massets/[22m[36mCard-fCrFlTqi.js                      [39m[1m[2m 35.42 kB[22m[1m[22m[2m │ gzip:  10.17 kB[22m
					<br />[19:56:45.527] [2mdist/[22m[2massets/[22m[36mindex-uTZhqZ-O.js                     [39m[1m[2m348.32 kB[22m[1m[22m[2m │ gzip: 105.92 kB[22m
					<br />[19:56:45.528] [32m✓ built in 6.71s[39m
					<br />[19:56:45.569] Done in 11.31s.
					<br />[19:56:45.647] Build Completed in /vercel/output [12s]
					<br />[19:56:45.681] Deploying outputs...
					<br />[19:56:47.232]
					<br />[19:56:47.505] Deployment completed
					<br />[19:56:53.108] Uploading build cache [30.17 MB]...
					<br />[19:56:54.501] Build cache uploaded: 1.393s
				</pre>
				{/* <Header />
				<Suspense fallback={<Spinner />}>
					<main className="main">
						<Outlet />
					</main>
				</Suspense> */}
			</QueryClientProvider>
		</FluentProvider>
	)
}