import { useQuery } from '@tanstack/react-query'
import { HTMLAttributes } from 'react'

const request = async (url: string) => {
	const response = await fetch(url)
	const json = await response.json()

	return json
}

export interface WpImageProps extends HTMLAttributes<HTMLImageElement> {
	imageId: number
}

export const WpImage = ({ imageId, ...props }: WpImageProps) => {
	const { data, error, isLoading } = useQuery({
		queryKey: [imageId],
		queryFn: () => request(`https://www.fb24m.ru/tms/wp-json/wp/v2/media/${imageId}`)
	})

	console.log(data)

	if (isLoading) return <>Загрузка...</>
	if (error) return <>Ошибка</>
	if (data) return <><img src={data.guid.rendered} alt={`image #${imageId}`} {...props} /></>
}