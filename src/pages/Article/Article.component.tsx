import { useQuery } from '@tanstack/react-query'
import styles from './Article.module.scss'
import { useParams } from 'react-router-dom'
import { wordpress } from '@/services/wordpress'
import { Breadcrumb, BreadcrumbButton, BreadcrumbDivider, BreadcrumbItem, Card, Spinner, Title2 } from '@fluentui/react-components'
import { Container } from '@/components/Container/Container.component'
import { AnimateLink } from '@/components/AnimateLink/AnimateLink.component'

const Article = () => {
	const params = useParams()
	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: ['article'],
		queryFn: () => wordpress.getPostBySlug(params.slug ? params.slug : '')
	})

	return (
		<Container>
			<Breadcrumb className={styles.breadcrumbs}>
				<BreadcrumbItem>
					<AnimateLink href="/">
						<BreadcrumbButton>
							ТМС
						</BreadcrumbButton>
					</AnimateLink>
				</BreadcrumbItem>
				<BreadcrumbDivider />
				<BreadcrumbItem>
					<AnimateLink href="/">
						<BreadcrumbButton>
							Статьи
						</BreadcrumbButton>
					</AnimateLink>
				</BreadcrumbItem>
				<BreadcrumbDivider />
				<BreadcrumbItem>
					<BreadcrumbButton current>
						{isSuccess ? data[0].title.rendered : ''}
					</BreadcrumbButton>
				</BreadcrumbItem>
			</Breadcrumb>
			<Card size="large">
				{isLoading ? <Spinner /> : ''}
				{isError ? <>{error.message}</> : ''}
				{isSuccess ? <>
					<Title2>{data[0].title.rendered}</Title2>
					<div className={styles.content} dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}></div>
				</> : ''}
			</Card>
		</Container>
	)
}
export default Article
