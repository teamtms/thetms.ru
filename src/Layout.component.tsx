import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { wordpress } from './services/wordpress'
import { useStore } from './hooks/useStore.hook'
import { useEffect } from 'react'

export const Layout = () => {
	const { siteTitle, setSiteTitle } = useStore()
	const { data, error } = useQuery({
		queryKey: ['site_info'],
		queryFn: () => wordpress.getSiteInfo()
	})
	// const { data: head } = useQuery({
	// 	queryKey: ['head'],
	// 	queryFn: () => wordpress.getWpHead()
	// })


	useEffect(() => {
		if (data && !siteTitle) {
			setSiteTitle(data.name)
		}
	}, [data])

	return <>
		<Helmet>
			<title>{siteTitle}</title>
			<link rel="shortcut icon" href={data?.site_icon_url} type="image/png" />

			{/* {head ? head : ''} */}
		</Helmet>
		{error ? error.message : ''}
		<div className="font-press-start-2p">
			<Outlet></Outlet>
		</div>
	</>
}