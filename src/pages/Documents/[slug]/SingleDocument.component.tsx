import { Container } from '@/components/Container/Container.component'
import styles from './SingleDocument.module.scss'
import { Button, Card, Spinner, Title3 } from '@fluentui/react-components';
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { wordpress } from '@/services/wordpress'
import { PassportCard } from '@/components/PassportCard/PassportCard.component'
import { ArrowLeftRegular } from '@fluentui/react-icons'
import { Helmet } from 'react-helmet';

const SingleDocument = () => {
	const { slug } = useParams()

	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: ['document', slug],
		queryFn: () => wordpress.getDocumentBySlug(slug!)
	})
	const navigate = useNavigate()

	return (
		<Container>
			<Helmet>
				<title>{isLoading ? 'Загрузка' : ''}{isSuccess ? data[0].title.rendered : ''} - ТМС</title>
			</Helmet>
			<Button icon={<ArrowLeftRegular />} onClick={() => { navigate(-1) }} appearance="subtle" className={styles.backButton}>Назад</Button>
			{isLoading && <Spinner />}
			{isError && error.message}
			{isSuccess && data.length > 0 && data.map((doc) =>
				<Card size="large">
					<Title3>{doc.title.rendered}</Title3>
					<div className={styles.content} dangerouslySetInnerHTML={{ __html: doc.content.rendered }}></div>
					<div className={styles.parties}>
						{doc.acf.parties.length > 0 && doc.acf.parties.map((party) =>
							<PassportCard userId={party} />
						)}
					</div>
				</Card>
			)}
		</Container>
	)
}

export default SingleDocument
