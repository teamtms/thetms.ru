import styles from './Header.module.scss'

import { Button, Title1, Link as FluentLink, Body1Strong } from '@fluentui/react-components'
import { Container } from '../Container/Container.component'
import { Link } from 'react-router-dom'
import { useState } from 'react'

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
				<ul className={styles.menu}>
					<li className={styles.item}>
						<FluentLink><Link className={styles.link} to="/">Главная</Link></FluentLink>
					</li>
					<li className={styles.item}>
						<FluentLink><Link className={styles.link} to="/fines">Штрафы</Link></FluentLink>
					</li>
					<li className={styles.item}>
						<FluentLink><Link className={styles.link} to="/send">Вебхуки</Link></FluentLink>
					</li>

				</ul>
			</Container>
		</header>
	)
}

export default Header
