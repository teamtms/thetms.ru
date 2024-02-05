import styles from './Header.module.scss'

import { Body1Strong, TabList, Tab } from '@fluentui/react-components'
import { Container } from '../Container/Container.component'
import { useState } from 'react'

import { HomeRegular, MoneyRegular, DocumentRegular, AppsAddInRegular, AddCircleRegular } from '@fluentui/react-icons'
import { AnimateLink } from '../AnimateLink/AnimateLink.component'

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

export const Header = () => {
	const [title, setTitle] = useState(generateWords())
	const toggleTitle = () => { setTitle(generateWords()) }

	return (
		<header>
			<Container className={styles.header}>
				<AnimateLink href="/">
					<Body1Strong className={styles.title} onClick={() => { toggleTitle() }}>{title}</Body1Strong>
				</AnimateLink>
				<div className="overflow-x-auto">
					<TabList defaultValue={"fines"} appearance="subtle" defaultSelectedValue={location.pathname.split('/')[1]}>
						<Tab className={styles.tab} value="articles" icon={<HomeRegular />}>
							<AnimateLink className={styles.link} href="/articles"></AnimateLink>
							Статьи
						</Tab>
						<Tab className={styles.tab} defaultChecked value="fines" icon={<MoneyRegular />}>
							<AnimateLink className={styles.link} href="/fines"></AnimateLink>
							Штрафы
						</Tab>
						<Tab className={styles.tab} value="documents" icon={<DocumentRegular />}>
							<AnimateLink className={styles.link} href="/documents"></AnimateLink>
							Документы
						</Tab>
						<Tab className={styles.tab} value="mods" icon={<AppsAddInRegular />}>
							<AnimateLink className={styles.link} href="/mods"></AnimateLink>
							Сборка
						</Tab>
						<Tab className={styles.tab} value="addons" icon={<AddCircleRegular />}>
							<AnimateLink className={styles.link} href="/addons"></AnimateLink>
							Аддоны
						</Tab>
					</TabList>
				</div>
			</Container>
		</header>
	)
}
