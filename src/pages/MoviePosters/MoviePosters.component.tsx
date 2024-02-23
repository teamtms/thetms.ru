import { Container } from "@/components/Container/Container.component"
import { WpImage } from "@/components/WpImage/WpImage.component"
import { wordpress } from "@/services/wordpress"
import { Spinner } from "@fluentui/react-components"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

const MoviePosters = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['posters'],
		queryFn: () => wordpress.getPosters()
	})

	return (
		<Container>
			{isLoading ? <Spinner /> : ''}
			{error ? error.message : ''}
			{data ? <ul className="flex gap-4">
				{data.map((item) => <li className="basis-1/3">
					<Link to={`${item.id}`} className="relative">
						<WpImage imageId={item.acf.background}
							className="aspect-[3/4] object-cover h-full rounded-md"></WpImage>
						<div
							className="absolute rounded-md
							w-full bottom-0 left-0 
							p-4 pt-8 text-[#fff]
							flex justify-between
							bg-[linear-gradient(0deg,#000,transparent)]"
						>
							<span className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: item.title.rendered }}></span>
							<span className="text-lg font-semibold">{item.acf.subtitle}</span>
						</div>
					</Link>
				</li>)}

			</ul> : ''}
		</Container>
	)
}

export default MoviePosters
