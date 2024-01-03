import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import styles from './Passport.module.scss'
import { WpImage } from '../../components/WpImage/WpImage.component'
import { Card } from '@fluentui/react-components'
import { Container } from '../../components/Container/Container.component'

const request = async (url: string) => {
	const response = await fetch(url)
	const json = await response.json()

	return json
}

const Passport = () => {
	const { username } = useParams()
	const { data, error, isLoading } = useQuery({
		queryKey: [`passport-${username}`],
		queryFn: () => request(`https://www.fb24m.ru/tms/wp-json/wp/v2/profile?slug=${username}`)
	})

	if (isLoading) return <>Загрузка...</>
	if (error) return <>{error.message}</>

	return (
		<Container>
			<Card className={styles.passport}>
				<h2 className={styles.title}>Паспорт гражданина ТМС #{data[0].id}</h2>
				<div className={styles.user}>
					<WpImage imageId={data[0].acf.avatar} className={styles.avatar}></WpImage>
					<div className={styles.data}>
						<div>
							<span>{data[0].title.rendered}</span>
						</div>
						<div>
							<strong>Фракция: </strong>
							<span className={styles.value}>{data[0].acf.fraction}</span>
						</div>
						<div>
							<strong>Роль: </strong>
							<span className={styles.value}>{data[0].acf.role}</span>
						</div>
						<div>
							<strong>Статус: </strong>
							<span className={styles.value}>{data[0].acf.status === 'admin' ? 'Администратор' : 'Пользователь'}</span>
						</div>
					</div>
				</div>
			</Card>
		</Container>
	)
}

export default Passport
