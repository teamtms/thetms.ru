import { useQuery } from '@tanstack/react-query'
import styles from './Article.module.scss'
import { useParams } from 'react-router-dom'
import { wordpress } from '@/services/wordpress'
import { Card, Spinner, Title2 } from '@fluentui/react-components'
import { Container } from '@/components/Container/Container.component'

const Article = () => {
	const params = useParams()
	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: ['article'],
		queryFn: () => wordpress.getPostBySlug(params.slug ? params.slug : '')
	})

	return (
		<Container>
			<Card>
				{isLoading ? <Spinner /> : ''}
				{isError ? <>{error.message}</> : ''}
				{isSuccess ? <>
					<Title2>{data[0].title.rendered}</Title2>
					<div className="content" dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}></div>
				</> : ''}
			</Card>
		</Container>
	)
}
export default Article
