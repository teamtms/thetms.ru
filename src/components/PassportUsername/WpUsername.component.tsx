import { useQuery } from '@tanstack/react-query'
import type { WpUsernameProps } from './WpUsername.props.ts'
import { wordpress } from '@/services/wordpress.ts'
import { Skeleton, SkeletonItem } from '@fluentui/react-components';

export const WpPassportUsername = ({ userId, ...props }: WpUsernameProps) => {
	const { isLoading, isSuccess, data } = useQuery({
		queryKey: ['user', userId],
		queryFn: () => wordpress.getUserById(userId)
	})

	return (
		<span {...props}>
			{isLoading || !data?.id ? <Skeleton><SkeletonItem style={{ width: 120 }} /></Skeleton> : ''}
			{isSuccess ? data.title.rendered : ''}
		</span>
	)
}
