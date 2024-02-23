import { Container } from "@/components/Container/Container.component"
import { WpImage } from "@/components/WpImage/WpImage.component"
import { formatDate } from "@/functions/formatDate"
import { wordpress } from "@/services/wordpress"
import { Spinner } from "@fluentui/react-components"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

const MoviePoster = () => {
	const { id } = useParams()

	const { isLoading, error, data } = useQuery({
		queryKey: ['poster', id],
		queryFn: () => wordpress.getPosterById(+id!)
	})

	return (
		<Container>
			{isLoading ? <Spinner /> : ''}
			{error ? error.message : ''}
			{data ?
				<div className="fixed top-0 left-0 w-full h-full">
					<WpImage imageId={data.acf.background}
						className="object-cover w-full h-full"></WpImage>
					<div className="absolute rounded-md
						w-full bottom-0 left-0
						bg-[linear-gradient(0deg,#000,transparent)] p-4 pt-8 text-[#fff]">
						<div
							className="flex justify-between"
						>
							<span className="text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: data.title.rendered }}></span>
							<span className="text-2xl font-semibold">в кино {formatDate(data.acf.date)}</span>
						</div>
						<span className="text-2xl font-semibold">{data.acf.subtitle}</span>
					</div>
				</div> : ''
			}
		</Container >
	)
}

export default MoviePoster
