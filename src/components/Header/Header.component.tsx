import styles from './Header.module.scss'

import { Spinner } from '@fluentui/react-components'
import { Container } from '../Container/Container.component'

import { AnimateLink } from '../AnimateLink/AnimateLink.component'
import { useStore } from '@/hooks/useStore.hook'
import { useQuery } from '@tanstack/react-query'
import { wordpress } from '@/services/wordpress'


export const Header = () => {
	const { siteTitle } = useStore()
	const { isLoading, data } = useQuery({
		queryKey: ['main_menu'],
		queryFn: () => wordpress.getMenuBySlug('main')
	})

	return (
		<header>
			<Container className={styles.header}>
				<AnimateLink href="/">
					<span>{siteTitle}</span>
				</AnimateLink>
				<div className="overflow-x-auto">
					{isLoading ? <Spinner /> : ''}
					{data
						? <ul className="flex">
							{data.items.map((item) => <>
								<li className="[font-weight:400] text-xs py-2 px-3 hover:bg-slate-100">
									{item.url.includes('[tms]')
										? <AnimateLink href={`${item.url.split('[tms]')[1]}`}>{item.title}</AnimateLink>
										: <a href={item.url}></a>}
								</li>
							</>)}
						</ul>
						: ''}
				</div>
			</Container>
		</header>
	)
}
