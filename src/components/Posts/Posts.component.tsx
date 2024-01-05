import { useQuery } from '@tanstack/react-query'
import styles from './Posts.module.scss'
import { wordpress } from '../../services/wordpress'
import { Button, Spinner } from '@fluentui/react-components'
import { Container } from '../Container/Container.component'
import { Post } from '../Post/Post.component'
import { AnimateLink } from '@/components/AnimateLink/AnimateLink.component';
import { useParams } from 'react-router-dom'
import { ArrowRightRegular, ArrowLeftRegular } from '@fluentui/react-icons'

export const Posts = () => {
	const { page } = useParams()
	const pageId = +page! ? +page! : 1

	const { data, isSuccess, error, isLoading, isError } = useQuery({
		queryKey: ['posts', pageId],
		queryFn: () => wordpress.getPosts(pageId),
	})

	return (
		<Container className={styles.posts}>
			{isLoading && <Spinner />}
			{isError && <>{error.message}</>}

			{isSuccess && data && data.length > 0 ? data.map((item) => <Post
				key={item.id}
				{...item}
			/>) : ''}

			<div className={styles.pagination} onClick={() => { document.body.scrollIntoView({ 'behavior': 'smooth', 'block': 'start' }) }}>
				{!!(pageId > 1)
					&& <AnimateLink href={`/archive/${pageId - 1}`}>
						<Button appearance="primary" icon={<ArrowLeftRegular />}>Назад</Button>
					</AnimateLink>}
				{!!(data && data.length >= 10) &&
					<AnimateLink href={`/archive/${pageId + 1}`}>
						<Button iconPosition="after" icon={<ArrowRightRegular />} appearance="primary">Далее</Button>
					</AnimateLink>}
			</div>
		</Container>
	)
}
