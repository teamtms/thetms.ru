import { useQuery } from '@tanstack/react-query'
import type { WpAvatarProps } from './WpAvatar.props.ts'
import { wordpress } from '@/services/wordpress.ts'
import { Skeleton, SkeletonItem, makeStyles } from '@fluentui/react-components'

const useStyles = makeStyles({
	skeleton: {
		'height': '208px'
	}
})

export const WpAvatar = (props: WpAvatarProps) => {

	const classes = useStyles()

	const { isLoading, data, error } = useQuery({
		queryKey: ['user', props.userId],
		queryFn: () => wordpress.getWpUserById(props.userId)
	})

	return (
		<>
			{isLoading
				? <Skeleton className="w-40">
					<SkeletonItem className={`inline-block w-full ${classes.skeleton}`}></SkeletonItem>
				</Skeleton>
				: ''}

			{data ? <img src={data.avatar_urls[96]} className="inline-block w-40 shrink-0 h-40 object-cover rounded-[4px]" /> : ''}

			{error ? error.message : ''}
		</>
	)
}


