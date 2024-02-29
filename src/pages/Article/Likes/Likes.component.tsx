import { useQuery } from '@tanstack/react-query'
import type { LikesProps } from './Likes.props.ts'
import { wordpress } from '@/services/wordpress.ts'

export const Likes = (props: LikesProps) => {
	const { isLoading: isButtonsLoading, data: buttons, error: buttonsError } = useQuery({
		queryKey: ['likes_buttons', props.postId],
		queryFn: () => wordpress.getRatesButtonsByPostId(props.postId),
		refetchInterval: 1000
	})

	return (
		<div>
			{isButtonsLoading ? 'Loading...' : ''}
			{buttonsError ? buttonsError.message : ''}
			{buttons ? <div dangerouslySetInnerHTML={{ __html: buttons }}></div> : ''}
		</div>
	)
}
