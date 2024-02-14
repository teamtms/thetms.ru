import { useQuery } from '@tanstack/react-query'

import styles from './Passport.module.scss'
import { WpImage } from '../../../components/WpImage/WpImage.component'
import { Input } from '@fluentui/react-components'
import { Container } from '../../../components/Container/Container.component'
import { useState } from 'react'
import { Icon } from '@/components/Icon/Icon.component'

const request = async (url: string) => {
	const response = await fetch(url)
	const json = await response.json()

	return json
}

const Passport = () => {
	const [username, setUsername] = useState('')
	const { data, error, isLoading } = useQuery({
		queryKey: [`passport-${username}`],
		queryFn: () => request(`https://www.fb24m.ru/tms/wp-json/wp/v2/profile?slug=${username}`)
	})

	if (isLoading) return <>Загрузка...</>
	if (error) return <>{error.message}</>

	return (
		<div className={styles.wrapper}>
			<Container className={styles.container}>
				<div className={styles.card}>
					{username ?
						<div className={styles.passport}>
							<h2 className={styles.title}>Паспорт гражданина ТМС #{data[0].id}</h2>
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
						</div> : <form onSubmit={(e) => {
							e.preventDefault()
							if (((document.querySelector('#code')! as HTMLInputElement).value) === '777800') {
								setUsername((document.querySelector('#username')! as HTMLInputElement).value)
							}
							else {
								const hint = document.querySelector('#hint')
								if (hint) { hint.innerHTML = 'Неверный код' }
							}
						}}>
							<Input placeholder='Введите имя' id="username"></Input>
							<Input placeholder='Введите код' id="code"></Input>
							<div id="hint"></div>
							<button type="submit">Отправить</button>
						</form>}
				</div>
			</Container>
		</div>
	)
}

export default Passport
