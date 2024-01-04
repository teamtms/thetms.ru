import styles from './Header.module.scss'

import { Body1Strong, TabList, Tab } from '@fluentui/react-components'
import { Container } from '../Container/Container.component'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { HomeRegular, MoneyRegular, SendRegular } from '@fluentui/react-icons'

const getRandomI = <T,>(array: T[]) => {
	return array[Math.floor(Math.random() * array.length)]
}

const generateWords = () => {
	const t_words = [
		'топор', 'травник', 'тунец', 'таз', 'танец'
	]
	const m_words = [
		'мучающий', 'меняющий', 'мутирующий', 'минирующий'
	]
	const s_words = [
		'соседа', 'страуса', 'слона', 'судьбу'
	]

	return `${getRandomI<string>(t_words)} ${getRandomI<string>(m_words)} ${getRandomI<string>(s_words)}`
}

const Header = () => {
	const [title, setTitle] = useState(generateWords())

	const toggleTitle = () => { setTitle(generateWords()) }

	return (
		<header>
			<Container className={styles.header}>
				<Body1Strong className={styles.title} onClick={() => { toggleTitle() }}>{title}</Body1Strong>
				<TabList>
					<Tab value="home" icon={<HomeRegular />}>
						<Link className={styles.link} to="/">Главная</Link>
					</Tab>
					<Tab value="fines" icon={<MoneyRegular />}>
						<Link className={styles.link} to="/fines">Штрафы</Link>
					</Tab>
					<Tab value="send" icon={<SendRegular />}>
						<Link className={styles.link} to="/send">Вебхуки</Link>
					</Tab>
				</TabList>
			</Container>
		</header>
	)
}

export default Header
