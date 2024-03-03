import { useQuery } from '@tanstack/react-query'
import styles from './Article.module.scss'
import { useParams } from 'react-router-dom'
import { wordpress } from '@/services/wordpress'
import { Breadcrumb, BreadcrumbButton, BreadcrumbDivider, BreadcrumbItem, Spinner, Title2 } from '@fluentui/react-components'
import { Container } from '@/components/Container/Container.component'
import { AnimateLink } from '@/components/AnimateLink/AnimateLink.component'
import Eval from '@/components/Eval/Eval.component'
import { WpImage } from '@/components/WpImage/WpImage.component';
import { Pin20Regular, Calendar20Regular, FormNew20Regular } from '@fluentui/react-icons'
import { Helmet } from 'react-helmet'
import { WpAvatar } from '@/components/Wp/WpAvatar/WpAvatar.component'
import { WpUsername } from '@/components/WpUsername/WpUsername.component'
import { WpCategory } from '@/components/Wp/WpCategory/WpCategory.component'
import { useStore } from '@/hooks/useStore.hook'
import { Likes } from './Likes/Likes.component'
import { Comments } from './Comments/Comments.component'

// function bytesToBase64(bytes: string) {
// 	const binString = String.fromCodePoint(...bytes)
// 	return btoa(binString)
// }

const Article = () => {
	const { siteTitle } = useStore()
	const params = useParams()

	const { isLoading, isError, isSuccess, error, data } = useQuery({
		queryKey: ['article', params.slug],
		queryFn: () => wordpress.getPostBySlug(params.slug ? params.slug : '')
	})

	return (
		<Container>
			<Helmet>
				<title>{isLoading ? 'Загрузка' : ''}{isSuccess ? data[0].title.rendered : ''} - {siteTitle}</title>
			</Helmet>
			<Breadcrumb className={styles.breadcrumbs}>
				<BreadcrumbItem>
					<AnimateLink href="/">
						<BreadcrumbButton>
							ТМС
						</BreadcrumbButton>
					</AnimateLink>
				</BreadcrumbItem>
				<BreadcrumbDivider />
				<BreadcrumbItem>
					<AnimateLink href="/articles">
						<BreadcrumbButton>
							Статьи
						</BreadcrumbButton>
					</AnimateLink>
				</BreadcrumbItem>
				<BreadcrumbDivider />
				<BreadcrumbItem>
					<BreadcrumbButton current>
						{isSuccess ? data[0].title.rendered : ''}
					</BreadcrumbButton>
				</BreadcrumbItem>
			</Breadcrumb>
			{isLoading ? <Spinner /> : ''}
			{isError ? <>{error.message}</> : ''}
			{isSuccess ? <>
				<WpImage className={`block ${styles.thumbnail} mb-4`} imageId={data[0].featured_media} />
				<div className="mb-5">
					<Title2>{data[0].title.rendered}</Title2>
				</div>

				<div className="flex gap-8">
					<div className="basis-40 shrink-0 mb-20">
						<div className="mb-2">
							<WpAvatar userId={data[0].author} />
						</div>
						<WpUsername className="text-center block font-semibold mb-4" userId={data[0].author} />
						<ul className="flex flex-col gap-1">
							<li className="flex gap-2">
								<Calendar20Regular className="basis-[20px] shrink-0" />
								{new Date(data[0].date).getDate()}.{new Date(data[0].date).getMonth() + 1}.{new Date(data[0].date).getFullYear()}
							</li>
							<li className="flex gap-2">
								<Pin20Regular className="basis-[20px] shrink-0" />
								{data[0].acf.tags}
							</li>
							<li className="flex gap-2">
								<FormNew20Regular className="basis-[20px] shrink-0" />
								<WpCategory categoryId={data[0].categories[0]} />
							</li>
						</ul>
						<Likes postId={data[0].id}></Likes>
					</div>
					<Eval dangerouslySetInnerHTML={{ __html: data[0].content.rendered }} />
				</div>
				<Comments postId={data[0].id}></Comments>
			</>
				: ''}
		</Container >
	)
}
export default Article
