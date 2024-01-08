import { useQuery } from '@tanstack/react-query'
import type { ProfitProps } from './Profit.props.ts'
import { wordpress } from '@/services/wordpress.ts'

export const Profit = (props: ProfitProps) => {
	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: ['profit', props.user.title],
		queryFn: () => wordpress.getOrgById()
	})

	return (
		<div>
			{data.}
		</div>
	)
}
