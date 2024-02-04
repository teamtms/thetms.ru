import { Spinner, Title1 } from '@fluentui/react-components'
import { Container } from '@/components/Container/Container.component'
import { useQuery } from '@tanstack/react-query'
import { wordpress } from '@/services/wordpress'
import { Fine } from './Fine/Fine.component'
import styles from './Fines.module.scss'

const Fines = () => {
	const { isLoading, isError, error, data } = useQuery({
		queryKey: ['fines'],
		queryFn: () => wordpress.getFines()
	})

	if (isLoading) return <Spinner />
	if (isError) return <Container>{error.message}</Container>
	if (data) return (
		<Container className={styles.container}>
			<Title1>Система штрафов ТМС</Title1>
			{data.map((fine) => <Fine
				key={fine.id}
				fine={fine} />
			)}
		</Container>
	)

	return <></>
}

export default Fines
