import { wordpress } from '@/services/wordpress'
import { Button, Spinner, Title2 } from '@fluentui/react-components'
import { useQuery } from '@tanstack/react-query'
import { WpImage } from '@/components/WpImage/WpImage.component'
import { AnimateLink } from '@/components/AnimateLink/AnimateLink.component'

const LatestNews = () => {
	const { isLoading, isSuccess, data } = useQuery({
		queryKey: ['latest-posts'],
		queryFn: () => wordpress.getPosts(1, 4)
	})

	return (
		<div className="mt-16">
			<Title2>Последние новости</Title2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
				{isLoading ? <Spinner /> : ''}
				{isSuccess && data.length > 0 ? data.map((item) =>
					<div className="">
						<WpImage imageId={item.featured_media} className="object-cover aspect-square rounded-md mb-4" />
						<span className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: item.title.rendered }}></span>
						<div className="mt-4">
							<AnimateLink href={`/post/${item.slug}`}><Button appearance='primary'>Читать полностью</Button></AnimateLink>
						</div>
					</div>
				) : ''}
			</div>
		</div>
	)
}

export default LatestNews
