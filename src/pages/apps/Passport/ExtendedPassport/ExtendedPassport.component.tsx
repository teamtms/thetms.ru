import { useQuery } from '@tanstack/react-query'

import styles from './ExtendedPassport.module.scss'
import { Container } from '@/components/Container/Container.component'
import { useNavigate, useParams } from 'react-router-dom'
import { FineCard } from '@/components/FineCard/FineCard.component'
import { wordpress } from '@/services/wordpress'
import { OrgCard } from '@/components/OrgCard/OrgCard.component'
import { InnerPassport } from '../InnerPassport/InnerPassport.component'
import { Button } from '@fluentui/react-components'
import { Helmet } from 'react-helmet-async'
import { useStore } from '@/hooks/useStore.hook'

const ExtendedPassport = () => {
	const { siteTitle } = useStore()
	const { username } = useParams()
	const { data, error, isLoading } = useQuery({
		queryKey: [`passport-${username}`],
		queryFn: () => wordpress.getUserByName(username!)
	})
	const navigate = useNavigate()

	if (isLoading) return <>Загрузка...</>
	if (error) return <>{error.message}</>

	return (
		<div className={styles.wrapper}>
			<Helmet>
				<title>Паспорт {data?.[0].title.rendered} - {siteTitle}</title>
			</Helmet>
			<Container className={styles.container}>
				<Button onClick={() => navigate(-1)} appearance="outline" className=""><span className="text-[#fff]">назад</span></Button>
				{username && data ? <>
					{/* <div className={styles.passport}>
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
					</div> */}
					<InnerPassport user={data[0]}></InnerPassport>
					{data[0].acf.fines ? <>
						<h2 className="text-2xl mb-4 mt-8">Штрафы и судимости</h2>
						<div className="flex flex-col gap-3">
							{data[0].acf.fines.map((item) => <FineCard key={item} id={item} />)}
						</div>
					</> : ''}
					{data[0].acf.owner_of.length !== 0 ? <>
						<h2 className="text-2xl mb-4 mt-8">Организации</h2>
						<div className="flex flex-col gap-3">
							{data[0].acf.owner_of.map((item) => <OrgCard key={item} id={item} />)}
						</div>
					</> : ''}
				</> : ''}
			</Container>
		</div>
	)
}

export default ExtendedPassport
