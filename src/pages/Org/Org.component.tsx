import { Container } from '@/components/Container/Container.component'
import Eval from '@/components/Eval/Eval.component'
import { WpPassportUsername } from '@/components/PassportUsername/WpUsername.component'
import { WpImage } from '@/components/WpImage/WpImage.component'
import { useStore } from '@/hooks/useStore.hook'
import { wordpress } from '@/services/wordpress'
import { Button } from '@fluentui/react-components'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom'

const Org = () => {
	const { siteTitle } = useStore()
	const { id } = useParams()
	const navigate = useNavigate()
	const { isLoading, data } = useQuery({
		queryKey: [`org-${id}`],
		queryFn: () => wordpress.getOrgById(+id!)
	})

	return (
		<div>
			{isLoading ? 'Загрузка' : ''}
			{data ? <Container className="min-h-[100vh]">
				<Helmet>
					<title>{data.title.rendered} в {data.acf.address.split(',')[0]} {siteTitle}</title>
				</Helmet>
				<Button onClick={() => navigate(-1)} appearance="outline" className=""><span className="text-[#fff]">назад</span></Button>
				<WpImage imageId={data.acf.photo} className="mb-8"></WpImage>
				<div className="flex gap-8 mb-8 items-start">
					<div className="flex flex-col border-l-[#fff] border-l-[2px] pl-4">
						<span className="mb-2">владелец</span>
						<WpPassportUsername className="text-xl" userId={data.acf.owner} />
					</div>
					<div className="flex flex-col border-l-[#fff] border-l-[2px] pl-4">
						<span className="mb-2">выручка</span>
						<span className="text-xl whitespace-nowrap">{data.acf.revenue} Р-Т</span>
					</div>
					<div className="flex flex-col border-l-[#fff] border-l-[2px] pl-4">
						<span className="mb-2">расположение</span>
						<span className="text-xl">{data.acf.address}</span>
					</div>
				</div>
				<h1 className="text-2xl mb-4" dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h1>
				<Eval dangerouslySetInnerHTML={{ __html: data.content.rendered }}></Eval>
			</Container> : ''}
		</div>
	)
}

export default Org
