import { Body1, Body1Strong, Card, Spinner, Title3 } from '@fluentui/react-components'
import type { PassportCardProps } from './PassportCard.props.ts'
import { useQuery } from '@tanstack/react-query'
import { wordpress } from '@/services/wordpress.ts'
import { formatDate } from '../../functions/formatDate.ts';

export const PassportCard = (props: PassportCardProps) => {
	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: [`user-${props.userId}`],
		queryFn: () => wordpress.getUserById(props.userId)
	})

	return (
		<Card size="large">
			<Title3>Паспорт гражданина ТМС #{props.userId}</Title3>
			{isLoading ? <Spinner /> : ''}
			{isError ? <>{error.message}</> : ''}
			{isSuccess ? <>
				<Body1Strong>{data.title.rendered}</Body1Strong>
				<div>
					<Body1Strong>Фракция: </Body1Strong>
					<Body1>{data.acf.fraction}</Body1>
				</div>
				<div>
					<Body1Strong>Роль: </Body1Strong>
					<Body1>{data.acf.role}</Body1>
				</div>
				<div>
					<Body1Strong>Дата рождения: </Body1Strong>
					<Body1>{formatDate(data.acf.birth_date)}</Body1>
				</div>
			</> : ''}
		</Card>
	)
}
