import { useQuery } from '@tanstack/react-query'
import type { OrgCardProps } from './OrgCard.props.ts'
import { wordpress } from '@/services/wordpress.ts'
import { Link } from 'react-router-dom'

export const OrgCard = (props: OrgCardProps) => {
	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: [`fine-${props.id}`],
		queryFn: () => wordpress.getOrgById(props.id)
	})

	return (
		<div className="p-4 bg-[#181b24] hover:bg-[#0a224f]">
			{isLoading ? 'Загрузка...' : ''}
			{isError ? error.message : ''}
			{isSuccess ? <Link to={`/apps/org/${props.id}`} className="cursor-pointer flex gap-8 justify-between">
				<strong className="text-[12px]"
					dangerouslySetInnerHTML={{ __html: data.title.rendered }}
				/>
			</Link> : ''}
		</div >
	)
}


