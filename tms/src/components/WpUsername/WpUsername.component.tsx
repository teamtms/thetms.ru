import { useQuery } from '@tanstack/react-query'
import type { WpUsernameProps } from './WpUsername.props.ts'
import { wordpress } from '@/services/wordpress.ts'
import { Skeleton, SkeletonItem } from '@fluentui/react-components';

export const WpUsername = ({ userId, ...props }: WpUsernameProps) => {
	const { isLoading, isSuccess, data } = useQuery({
		queryKey: ['user', userId],
		queryFn: () => wordpress.getWpUserById(userId)
	})

	return (
		<span {...props}>
			{isLoading || !data?.id ? <Skeleton><SkeletonItem style={{ width: 120 }} /></Skeleton> : ''}
			{isSuccess ? data.name : ''}
		</span>
	)
}
