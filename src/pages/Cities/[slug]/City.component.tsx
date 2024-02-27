import { Container } from '@/components/Container/Container.component'
import Eval from '@/components/Eval/Eval.component'
import { wordpress } from '@/services/wordpress'
import { Spinner } from '@fluentui/react-components'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { CityOrganization } from './CityOrganization/CityOrganization.component'
import { Helmet } from 'react-helmet-async'
import { useStore } from '@/hooks/useStore.hook'

const City = () => {
	const { siteTitle } = useStore()
	const { slug } = useParams()
	const { isLoading, data, error } = useQuery({
		queryKey: ['city', slug],
		queryFn: () => wordpress.getCityBySlug(slug!)
	})

	return (
		<div className={`${navigator.appVersion.includes('Chrome') ? 'bg-app text-[#fff] font-press-start-2p py-8' : ''}`}>
			<Container className="min-h-[100vh]">
				{isLoading ? <Spinner /> : ''}
				{error ? error.message : ''}
				{data ? <>
					<Helmet>
						<title>{data?.[0].title.rendered} - {siteTitle}</title>
					</Helmet>
					<span className="block mb-2">добро пожаловать в</span>
					<h1 className="text-4xl mb-4">{data[0].title.rendered}</h1>
					<Eval className="mb-16 max-w-2xl" dangerouslySetInnerHTML={{ __html: data[0].content.rendered ? data[0].content.rendered : '' }}></Eval>
					<div className="flex flex-col gap-20">
						{data[0].acf.orgs.map((item) => <CityOrganization organizationId={item} />)}
					</div>
				</> : ''}
			</Container>
		</div >
	)
}

export default City
