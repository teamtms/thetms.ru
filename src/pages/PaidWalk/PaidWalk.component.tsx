import { Container } from "@/components/Container/Container.component"
import { wordpress } from "@/services/wordpress"
import { useQuery } from "@tanstack/react-query"
import styles from './PaidWalk.module.scss'
import { formatDate } from "@/functions/formatDate"

const PaidWalk = () => {
	const { isLoading, data, error } = useQuery({
		queryKey: ['pw_tasks'],
		queryFn: () => wordpress.getPwOrders()
	})

	return (
		<Container>
			{isLoading ? 'Загрузка' : ''}
			{error ? error.message : ''}
			<div className={styles.items}>
				{data ? data.map((item) => <details className={styles.item} key={item.id}>
					<summary className={styles.buyer}>
						<div className={styles.avatar}>
							<img src="avatar.jpg" alt="" />
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
		</Container>
	)
}

export default PaidWalk
