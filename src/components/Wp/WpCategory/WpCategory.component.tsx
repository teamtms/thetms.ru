import { useQuery } from '@tanstack/react-query';
import type { WpCategoryProps } from './WpCategory.props.ts'
import { Skeleton, SkeletonItem } from '@fluentui/react-components';
import { wordpress } from '@/services/wordpress.ts';

export const WpCategory = ({ categoryId, ...props }: WpCategoryProps) => {
	const { isLoading, isSuccess, data } = useQuery({
		queryKey: ['category', categoryId],
		queryFn: () => wordpress.getCategoryById(categoryId)
	})

	return (
		<span {...props}>
			{isLoading || !data?.id ?
				<Skeleton className="w-20">
					<SkeletonItem />
				</Skeleton> : ''}
			{isSuccess ?
				data.name
				: ''}
		</span>
	)
}
