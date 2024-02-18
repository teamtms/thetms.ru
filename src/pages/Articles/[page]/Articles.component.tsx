import { useQuery } from '@tanstack/react-query'
import styles from './Articles.module.scss'
import { wordpress } from '../../../services/wordpress'
import { Button, Spinner } from '@fluentui/react-components'
import { Container } from '../../../components/Container/Container.component'
import { Post } from '../../../components/Post/Post.component'
import { AnimateLink } from '@/components/AnimateLink/AnimateLink.component';
import { useParams } from 'react-router-dom'
import { ArrowRightRegular, ArrowLeftRegular } from '@fluentui/react-icons'
import { Helmet } from 'react-helmet'

const Articles = () => {
	const { page } = useParams()
	const pageId = +page! ? +page! : 1

	const { data, isSuccess, error, isLoading, isError } = useQuery({
		queryKey: ['posts', pageId],
		queryFn: () => wordpress.getPosts(pageId, 15),
	})

	return (
		<Container className={styles.posts}>
			<Helmet>
				<title>Статьи - ТМС</title>
			</Helmet>

			{isLoading && <Spinner />}
			{isError && <>{error.message}</>}

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{isSuccess && data && data.length > 0 ? data.map((item) => <Post
					key={item.id}
					{...item}
				/>) : ''}
			</div>

			<div className={styles.pagination} onClick={() => { document.body.scrollIntoView({ 'behavior': 'smooth', 'block': 'start' }) }}>
				{!!(pageId > 1)
					&& <AnimateLink href={`/articles/${pageId - 1}`}>
						<Button appearance="primary" icon={<ArrowLeftRegular />}>Назад</Button>
					</AnimateLink>}
				{!!(data && data.length >= 15) &&
					<AnimateLink href={`/articles/${pageId + 1}`}>
						<Button iconPosition="after" icon={<ArrowRightRegular />} appearance="primary">Далее</Button>
					</AnimateLink>}
			</div>
		</Container>
	)
}

export default Articles
