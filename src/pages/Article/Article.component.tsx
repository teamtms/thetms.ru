import { useQuery } from '@tanstack/react-query'
import styles from './Article.module.scss'
import { useParams } from 'react-router-dom'
import { wordpress } from '@/services/wordpress'
import { Breadcrumb, BreadcrumbButton, BreadcrumbDivider, BreadcrumbItem, Card, Spinner, Title2 } from '@fluentui/react-components'
import { Container } from '@/components/Container/Container.component'
import { AnimateLink } from '@/components/AnimateLink/AnimateLink.component'
import Eval from '@/components/Eval/Eval.component'
import { WpImage } from '@/components/WpImage/WpImage.component';
import { Pin20Regular, Person20Regular, Calendar20Regular } from '@fluentui/react-icons';
import { WpUsername } from '@/components/WpUsername/WpUsername.component'

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
					<AnimateLink href="/articles">
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
			{isLoading ? <Spinner /> : ''}
			{isError ? <>{error.message}</> : ''}
			{isSuccess ? <>
				<WpImage className={styles.thumbnail} imageId={data[0].featured_media} />
				<Card size="large">

					<Title2>{data[0].title.rendered}</Title2>
					<ul className={`${styles.labels} mb-1`}>
						<li className={styles.label}><Pin20Regular />{data[0].acf.tags}</li>
						<li className={styles.label}><Person20Regular /> <WpUsername userId={data[0].author} /></li>
						<li className={styles.label}><Calendar20Regular /> {new Date(data[0].date).getDate()}.{new Date(data[0].date).getMonth() + 1}.{new Date(data[0].date).getFullYear()}</li>
					</ul>
					<Eval dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}></Eval>
				</Card>
			</>
				: ''}
		</Container >
	)
}
export default Article
