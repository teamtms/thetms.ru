import styles from './Post.module.scss'
import { IPost } from '../../interfaces/Post.interface.ts'
import { WpImage } from '../WpImage/WpImage.component'
import { Pin20Regular, Person20Regular, Calendar20Regular } from '@fluentui/react-icons'
import { AnimateLink } from '../AnimateLink/AnimateLink.component.tsx'
import { WpUsername } from '../WpUsername/WpUsername.component'
import { WpCategory } from '../Wp/WpCategory/WpCategory.component';

export const Post = (props: IPost) => {
	return (
		<AnimateLink href={`/article/${props.slug}`} className="flex flex-col gap-4 h-full overflow-hidden">
			<div className={`${styles.imageBlock}`}>
				<WpImage className={`${styles.image} aspect-square`} imageId={props.featured_media} />
			</div>
			<div className={`${styles.content} grow`}>
				<h3 className="text-lg leading-snug font-semibold mb-0.5 block max-h-20 overflow-hidden" dangerouslySetInnerHTML={{ __html: props.title.rendered }}></h3>
				<ul className={`${styles.labels} mb-1`}>
					<li className={styles.label}><Pin20Regular /> <WpCategory categoryId={props.categories[0]} /></li>
					<li className={styles.label}><Person20Regular /> <WpUsername userId={props.author} /></li>
					<li className={styles.label}><Calendar20Regular /> {new Date(props.date).getDate()}.{new Date(props.date).getMonth() + 1}.{new Date(props.date).getFullYear()}</li>
				</ul>
				<div className={`${styles.excerpt} max-h-20 overflow-hidden grow`} dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}></div>
			</div>
		</AnimateLink>
	)
}
