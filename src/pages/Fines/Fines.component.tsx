import { Spinner, Title1 } from '@fluentui/react-components'
import { Container } from '@/components/Container/Container.component'
import { useQuery } from '@tanstack/react-query'
import { wordpress } from '@/services/wordpress'
import { Fine } from './Fine/Fine.component'
import styles from './Fines.module.scss'
import { Helmet } from 'react-helmet'
import { useStore } from '@/hooks/useStore.hook'

const Fines = () => {
	const { siteTitle } = useStore()
	const { isLoading, isError, error, data } = useQuery({
		queryKey: ['fines'],
		queryFn: () => wordpress.getFines()
	})

	if (isLoading) return <Spinner />
	if (isError) return <Container>{error.message}</Container>
	if (data) return (
		<Container className={styles.container}>
			<Helmet>
				<title>Система штрафов - {siteTitle}</title>
			</Helmet>
			<Title1>Система штрафов ТМС</Title1>
			{data.map((fine) => <>
				{fine.acf.is_opened
					? <Fine
						key={fine.id}
						fine={fine} />
					: ''}
			</>
			)}
		</Container>
	)

	return <></>
}

export default Fines
