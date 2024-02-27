import { Container } from "@/components/Container/Container.component"
import { wordpress } from "@/services/wordpress"
import { Card, Title3, SkeletonItem, Skeleton } from '@fluentui/react-components'
import { useQuery } from '@tanstack/react-query'
import { WpImage } from '../../components/WpImage/WpImage.component'
import { AnimateLink } from "@/components/AnimateLink/AnimateLink.component"
import { Helmet } from 'react-helmet-async'
import { useStore } from "@/hooks/useStore.hook"

const Addons = () => {
	const { siteTitle } = useStore()
	const { isLoading, isSuccess, data } = useQuery({
		queryKey: ['addons'],
		queryFn: () => wordpress.getAddons()
	})

	return (
		<Container className="flex flex-col gap-2">
			<Helmet>
				<title>Аддоны - {siteTitle}</title>
			</Helmet>

			{isLoading
				? <><Card>
					<div className="flex gap-4 h-60">
						<div className="basis-60">
							<Skeleton className="h-full" width={60}>
								<SkeletonItem shape="rectangle" className="w-60 h-full rounded-md"></SkeletonItem>
							</Skeleton>
						</div>
						<div className="grow flex flex-col gap-2 justify-stretch">
							<Skeleton className="h-8 w-full" width="100%">
								<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
							</Skeleton>
							<div className="mt-2 flex flex-col gap-2">
								<Skeleton className="h-4 w-5/6" width="100%">
									<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
								</Skeleton>
								<Skeleton className="h-4 w-4/6" width="90%">
									<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
								</Skeleton>
								<Skeleton className="h-4 w-full" width="90%">
									<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
								</Skeleton>
							</div>
						</div>
					</div>
				</Card>
					<Card>
						<div className="flex gap-4 h-60">
							<div className="basis-60">
								<Skeleton className="h-full" width={60}>
									<SkeletonItem shape="rectangle" className="w-60 h-full rounded-md"></SkeletonItem>
								</Skeleton>
							</div>
							<div className="grow flex flex-col gap-2 justify-stretch">
								<Skeleton className="h-8 w-full" width="100%">
									<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
								</Skeleton>
								<div className="mt-2 flex flex-col gap-2">
									<Skeleton className="h-4 w-5/6" width="100%">
										<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
									</Skeleton>
									<Skeleton className="h-4 w-4/6" width="90%">
										<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
									</Skeleton>
									<Skeleton className="h-4 w-full" width="90%">
										<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
									</Skeleton>
								</div>
							</div>
						</div>
					</Card><Card>
						<div className="flex gap-4 h-60">
							<div className="basis-60">
								<Skeleton className="h-full" width={60}>
									<SkeletonItem shape="rectangle" className="w-60 h-full rounded-md"></SkeletonItem>
								</Skeleton>
							</div>
							<div className="grow flex flex-col gap-2 justify-stretch">
								<Skeleton className="h-8 w-full" width="100%">
									<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
								</Skeleton>
								<div className="mt-2 flex flex-col gap-2">
									<Skeleton className="h-4 w-5/6" width="100%">
										<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
									</Skeleton>
									<Skeleton className="h-4 w-4/6" width="90%">
										<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
									</Skeleton>
									<Skeleton className="h-4 w-full" width="90%">
										<SkeletonItem shape="rectangle" className="w-full h-full rounded-md"></SkeletonItem>
									</Skeleton>
								</div>
							</div>
						</div>
					</Card></>
				: ''}

			{isSuccess
				? data.map((item) => <Card>
					<AnimateLink href={`/addons/${item.slug}`} className="flex gap-4">
						<div className="basis-60">
							<WpImage className="rounded-md" imageId={item.featured_media} />
						</div>
						<div>
							<Title3>
								<span dangerouslySetInnerHTML={{ __html: item.title.rendered }}></span>
							</Title3>
							<div className="mt-2" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
						</div>
					</AnimateLink>
				</Card>) : ''}
		</Container>
	)
}

export default Addons
