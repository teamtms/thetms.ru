import { Body1Strong, Card } from '@fluentui/react-components'
import type { DownloadProps } from './Download.props.ts'
import { useQuery } from '@tanstack/react-query'
import { wordpress } from '@/services/wordpress.ts'

export const Download = ({ fileId, className, ...props }: DownloadProps) => {
	const { isSuccess, data } = useQuery({
		queryKey: ['media', fileId],
		queryFn: () => wordpress.getMediaById(fileId)
	})

	return (
		<div className={className} {...props}>
			<Card size="large">
				{isSuccess ? <div className="flex flex-col gap-1">
					<Body1Strong>{data.title.rendered}</Body1Strong>
					<a href={data.guid.rendered} download>{data.guid.rendered}</a>
				</div> : ''}
			</Card>
		</div>
	)
}


