import { Container } from '@/components/Container/Container.component.tsx'
import styles from './Mods.module.scss'
import { Button, Card, Skeleton, SkeletonItem, Title2, Title3 } from '@fluentui/react-components'
import { useQuery } from '@tanstack/react-query'
import { github } from '@/services/github'

import { Calendar20Regular, Person20Regular } from '@fluentui/react-icons'
import { Helmet } from 'react-helmet'
import { useStore } from '@/hooks/useStore.hook'

const Mods = () => {
	const { siteTitle } = useStore()
	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: ['mods'],
		queryFn: () => github.getModpackReleases()
	})

	return (
		<Container className={styles.container}>
			<Helmet>
				<title>Скачать последнюю сборку модов - {siteTitle}</title>
			</Helmet>
			<Title2>Скачать последнюю сборку модов ТМС</Title2>
			{isLoading &&
				<Skeleton animation="wave" width="100%">
					<Card>
						<SkeletonItem size={32}></SkeletonItem>
						<SkeletonItem size={16}></SkeletonItem>
						<SkeletonItem size={16}></SkeletonItem>
						<SkeletonItem size={16}></SkeletonItem>
					</Card>
					<Card>
						<SkeletonItem size={32}></SkeletonItem>
						<SkeletonItem size={16}></SkeletonItem>
						<SkeletonItem size={16}></SkeletonItem>
						<SkeletonItem size={16}></SkeletonItem>
					</Card>
					<Card>
						<SkeletonItem size={32}></SkeletonItem>
						<SkeletonItem size={16}></SkeletonItem>
						<SkeletonItem size={16}></SkeletonItem>
						<SkeletonItem size={16}></SkeletonItem>
					</Card>
				</Skeleton>}
			{isError && <Card>{error.message}</Card>}
			{isSuccess && <Card className={styles.card}>
				<Title3 >{data.name} <span className={styles.tag}>{data.tag_name}</span></Title3>
				<div className={styles.info}>
					<div className={styles.infoBlock}>
						<Calendar20Regular />
						{new Date(data.published_at).getDate()}.{new Date(data.published_at).getMonth() + 1}.{new Date(data.published_at).getFullYear()}
					</div>
					<div className={styles.infoBlock}>
						<Person20Regular />
						{data.author.login}
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: data.body.replace(/\r\n/g, '<br>') }}></div>
				<Button appearance="primary" as="a" href={data.zipball_url}>Скачать</Button>
			</Card>}
		</Container>
	)
}

export default Mods
