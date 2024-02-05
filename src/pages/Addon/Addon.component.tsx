import { Container } from "@/components/Container/Container.component"
import { wordpress } from "@/services/wordpress"
import { Card, Spinner, Title1 } from "@fluentui/react-components"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { WpUsername } from '../../components/WpUsername/WpUsername.component';
import { CodeBlock20Regular, DocumentPageNumber20Regular } from '@fluentui/react-icons'
import Eval from "@/components/Eval/Eval.component"
import { Download } from "@/components/Download/Download.component"

const Addon = () => {
	const { slug } = useParams()

	const { isLoading, isSuccess, data } = useQuery({
		queryKey: ['addon', slug!],
		queryFn: () => wordpress.getAddonBySlug(slug!)
	})

	return (
		<Container>
			<Card size="large">
				{isLoading ? <Spinner /> : ''}
				{isSuccess
					? <>
						<Title1><span dangerouslySetInnerHTML={{ __html: data[0].title.rendered }}></span></Title1>
						<div className="flex gap-4">
							<div className="flex items-center gap-1">
								<CodeBlock20Regular />
								<WpUsername userId={data[0].author} />
							</div>
							<div className="flex items-center gap-1">
								<DocumentPageNumber20Regular />
								{data[0].acf.versions.join(', ')}
							</div>
						</div>
						<Eval dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}></Eval>
					</>
					: ''}
			</Card>
			{isSuccess ?
				<Download className="mt-4" fileId={data[0].acf.file} /> : ''}
		</Container>
	)
}

export default Addon
