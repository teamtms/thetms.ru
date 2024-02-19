import { useQuery } from '@tanstack/react-query'
import type { FineCardProps } from './FineCard.props.ts'
import { wordpress } from '@/services/wordpress.ts'

export const FineCard = (props: FineCardProps) => {
	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: [`fine-${props.id}`],
		queryFn: () => wordpress.getFineById(props.id)
	})

	return (
		<div className="p-4 bg-[#181b24] hover:bg-[#0a224f]">
			{isLoading ? 'Загрузка...' : ''}
			{isError ? error.message : ''}
			{isSuccess ? <details><summary className="cursor-pointer flex gap-8 justify-between">
				<strong className="text-[12px]"
					dangerouslySetInnerHTML={{ __html: data.title.rendered }}
				/>
				<strong className="text-[8px] whitespace-nowrap">{data.acf.amount} Р-Т</strong>
			</summary>
				<div className="mt-4 leading-5 text-[12px]" dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
			</details> : ''
			}
		</div >
	)
}


