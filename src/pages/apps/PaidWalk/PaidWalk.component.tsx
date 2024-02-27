import { Container } from '@/components/Container/Container.component'
import { wordpress } from '@/services/wordpress'
import { useQuery } from '@tanstack/react-query'
import styles from './PaidWalk.module.scss'
import { formatDate } from '@/functions/formatDate'
import { WpImage } from '@/components/WpImage/WpImage.component'
import { Helmet } from 'react-helmet-async'
import { useStore } from '@/hooks/useStore.hook'

const PaidWalk = () => {
	const { siteTitle } = useStore()
	const { isLoading, data, error } = useQuery({
		queryKey: ['pw_tasks'],
		queryFn: () => wordpress.getPwOrders()
	})

	return (
		<div className={styles.wrapper}>
			<Helmet>
				<title>PaidWalk - {siteTitle}</title>
			</Helmet>
			<Container>
				{isLoading ? 'Загрузка' : ''}
				{error ? error.message : ''}
				<div className={styles.items}>
					{data ? data.map((item) => <details className={styles.item} key={item.id}>
						<summary className={styles.buyer}>
							<div className={styles.avatar}>
								{item.acf.avatar ? <WpImage className={styles.avatar_image} imageId={item.acf.avatar} /> :
									<img src="avatar.jpg" alt="" />
								}
							</div>
							<div className={styles.data}>
								<h2 className={styles.buyer_name}>{item.acf.buyer}</h2>
								<h3 className={styles.title}>{item.title.rendered}</h3>
							</div>
						</summary>
						<div>
							<div className={styles.content} dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
							<div className={styles.additional_info}>
								<div className={styles.additional_item}>
									<span className={styles.additional_title}>награда</span>
									<span className={styles.additional_value}>{item.acf.budget} р-т</span>
								</div>
								<div className={styles.additional_item}>
									<span className={styles.additional_title}>до</span>
									<span className={styles.additional_value}>{formatDate(item.acf.end_date)}</span>
								</div>
							</div>
						</div>
					</details>) : ''}
				</div>
			</Container></div>
	)
}

export default PaidWalk
