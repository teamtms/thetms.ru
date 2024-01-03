import { useQuery } from '@tanstack/react-query'
import styles from './Posts.module.scss'
import { wordpress } from '../../services/wordpress'
import { Spinner } from '@fluentui/react-components'
import { Container } from '../Container/Container.component'
import { Post } from '../Post/Post.component'

export const Posts = () => {
	const { data, error, isLoading, isError } = useQuery({
		queryKey: ['posts'],
		queryFn: () => wordpress.getPosts()
	})

	console.log(data)

	if (isLoading) return <><Spinner /></>
	if (isError) return <>{error.message}</>
	if (data) return (
		<Container className={styles.posts}>
			{data.map((item) => <Post
				key={item.id}
				{...item}
			/>)}

		</Container>
	)

	return <>Посты отсутствуют</>
}
