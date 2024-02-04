import { wordpress } from '@/services/wordpress'
import { useQuery } from '@tanstack/react-query'
import { HTMLAttributes } from 'react'

export interface WpImageProps extends HTMLAttributes<HTMLImageElement> {
	imageId: number
}

export const WpImage = ({ imageId, ...props }: WpImageProps) => {
	const { data, error, isLoading } = useQuery({
		queryKey: [imageId],
		queryFn: () => wordpress.getMediaById(imageId)
	})

	if (isLoading) return <>Загрузка...</>
	if (error) return <>Ошибка</>
	if (data) return <><img src={data.guid?.rendered ? data.guid.rendered : '/image-placeholder.png'} alt={`image #${imageId}`} {...props} /></>
}