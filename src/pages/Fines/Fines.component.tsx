import { Spinner, Title1 } from '@fluentui/react-components'
import { Container } from '@/components/Container/Container.component'
import { useQuery } from '@tanstack/react-query';
import { wordpress } from '@/services/wordpress';
import { Fine } from './Fine/Fine.component';

const Fines = () => {
	const { isLoading, isError, error, data } = useQuery({
		queryKey: ['fines'],
		queryFn: () => wordpress.getFines()
	})

	if (isLoading) return <Spinner />
	if (isError) return <Container>{error.message}</Container>
	if (data) return (
		<Container>
			<Title1>Система штрафов ТМС</Title1>
			{data.map((fine) => <Fine
				fine={fine} />
			)}
		</Container>
	)

	return <></>
}

export default Fines
