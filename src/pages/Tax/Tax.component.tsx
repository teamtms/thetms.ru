import { Container } from '@/components/Container/Container.component'
import styles from './Tax.module.scss'
import { Card, Spinner } from '@fluentui/react-components'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { wordpress } from '@/services/wordpress'
import { Profit } from './Profit/Profit.component'

const Tax = () => {
	const { username } = useParams()

	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: ['tax', username],
		queryFn: () => wordpress.getUserByName(username ? username : '')
	})

	return (
		<Container>
			{isLoading && <Spinner />}
			{isError && error.message}
			{isSuccess && <Profit user={data} />}
		</Container>
	)
}

export default Tax
