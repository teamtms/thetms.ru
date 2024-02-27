import { useQuery } from '@tanstack/react-query'

import styles from './Passport.module.scss'
import { Container } from '@/components/Container/Container.component'
import { Link, useParams } from 'react-router-dom'
import { InnerPassport } from './InnerPassport/InnerPassport.component'
import { Helmet } from 'react-helmet'
import { useStore } from '@/hooks/useStore.hook'

const request = async (url: string) => {
	const response = await fetch(url)
	const json = await response.json()

	return json
}

const Passport = () => {
	const { siteTitle } = useStore()
	const { username } = useParams()
	const { data, error, isLoading } = useQuery({
		queryKey: [`passport-${username}`],
		queryFn: () => request(`https://www.fb24m.ru/tms/wp-json/wp/v2/profile?slug=${username}`)
	})

	if (isLoading) return <>Загрузка...</>
	if (error) return <>{error.message}</>

	return (
		<div className={styles.wrapper}>
			<Helmet>
				<title>Паспорт {data[0].title.rendered} - {siteTitle}</title>
			</Helmet>
			<Container className={styles.container}>
				<Link to="extended" className={styles.card}>
					{username ?
						<InnerPassport user={data[0]} /> : ''}
				</Link>
			</Container>
		</div>
	)
}

export default Passport
