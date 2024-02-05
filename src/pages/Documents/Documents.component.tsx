import { Container } from '@/components/Container/Container.component'
import styles from './Documents.module.scss'
import { Button, Card, Input, Spinner, Body1Strong } from '@fluentui/react-components';
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { wordpress } from '@/services/wordpress'
import { AnimateLink } from '@/components/AnimateLink/AnimateLink.component';

const Documents = () => {
	const naviate = useNavigate()
	const params = new URL(location.href).searchParams
	const search = params.get('search')

	const { isLoading, isSuccess, isError, data, error } = useQuery({
		queryKey: ['documents', search],
		queryFn: () => wordpress.searchDocuments(search ? search : '')
	})

	return (
		<Container className={styles.container}>
			<form onSubmit={(e) => {
				e.preventDefault()
				const formData = new FormData(e.target as HTMLFormElement)

				naviate(`/documents?search=${formData.get('search')}`)

				console.log(formData.get('search'))
			}}>
				<Input name="search" placeholder="Поиск по документам" />
				<Button type="submit" appearance="primary">Найти</Button>
			</form>

			{isLoading && <Spinner />}
			{isError && error.message}
			{isSuccess && data.length > 0 && search && data.map((doc) =>
				<AnimateLink href={`/documents/${doc.slug}`}>
					<Card>
						<Body1Strong>{doc.title.rendered}</Body1Strong>
					</Card>
				</AnimateLink>
			)}
		</Container>
	)
}

export default Documents
