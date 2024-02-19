import { useQuery } from '@tanstack/react-query'

import styles from './ExtendedPassport.module.scss'
import { WpImage } from '@/components/WpImage/WpImage.component'
import { Container } from '@/components/Container/Container.component'
import { Icon } from '@/components/Icon/Icon.component'
import { useParams } from 'react-router-dom'
import { FineCard } from '@/components/FineCard/FineCard.component'
import { wordpress } from '@/services/wordpress'
import { OrgCard } from '@/components/OrgCard/OrgCard.component'

const ExtendedPassport = () => {
	const { username } = useParams()
	const { data, error, isLoading } = useQuery({
		queryKey: [`passport-${username}`],
		queryFn: () => wordpress.getUserByName(username!)
	})

	if (isLoading) return <>Загрузка...</>
	if (error) return <>{error.message}</>

	return (
		<div className={styles.wrapper}>
			<Container className={styles.container}>
				{username && data ? <>
					<div className={styles.passport}>
						<h2 className={styles.title}>Дело гражданина ТМС #{data[0].id}</h2>
						<div className={styles.user}>
							<WpImage imageId={data[0].acf.avatar} className={styles.avatar}></WpImage>
							<div className={styles.data}>
								<div className={styles.username}>
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
								<ul className={styles.additions}>
									{data[0].acf.additions.split('\n').map((item: string) => <li key={item[0] + item[1]} title={item.split(':')[1]} className={styles.addition}>
										<Icon className={styles.addition_icon}>{item.split(':')[0]}</Icon>
									</li>)}
								</ul>
							</div>
						</div>
					</div>
					{data[0].acf.fines ? <>
						<h2 className="text-2xl mb-4 mt-8">Штрафы и судимости</h2>
						<div className="flex flex-col gap-3">
							{data[0].acf.fines.map((item) => <FineCard id={item} />)}
						</div>
					</> : ''}
					{data[0].acf.owner_of.length !== 0 ? <>
						<h2 className="text-2xl mb-4 mt-8">Организации</h2>
						<div className="flex flex-col gap-3">
							{data[0].acf.owner_of.map((item) => <OrgCard id={item} />)}
						</div>
					</> : ''}
				</> : ''}
			</Container>
		</div>
	)
}

export default ExtendedPassport
