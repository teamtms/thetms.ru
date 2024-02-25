import { useQuery } from '@tanstack/react-query'
import type { CityOrganizationProps } from './CityOrganization.props'
import { wordpress } from '@/services/wordpress'
import { WpImage } from '@/components/WpImage/WpImage.component'
import { Link } from 'react-router-dom'

export const CityOrganization = (props: CityOrganizationProps) => {
	const { isLoading, data, error } = useQuery({
		queryKey: ['organization', props.organizationId],
		queryFn: () => wordpress.getOrgById(props.organizationId)
	})

	return (
		<>
			{isLoading ? <>Loading...</> : ''}
			{error ? error.message : ''}
			{data
				? <div className="sm:flex gap-16 items-center odd:flex-row-reverse">
					<div className="basis-1/2 mb-8 sm:mb-0">
						<h2 className="text-xl mb-4" dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h2>
						<p className="text-xs leading-[150%] mb-4" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></p>
						<Link to={`/org/${data.id}`} className="inline-block p-3 text-xs bg-app-card hover:bg-app-accent">Подробнее</Link>
					</div>
					<div className="basis-1/2">
						<WpImage className="aspect-square object-cover" imageId={data.acf.photo}></WpImage>
					</div>
				</div> : ''}
		</>
	)
}


