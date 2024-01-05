import { Button, Card, Title2 } from '@fluentui/react-components'
import styles from './Post.module.scss'
import { IPost } from '../../interfaces/Post.interface.ts'
import { WpImage } from '../WpImage/WpImage.component'
import { TextboxMoreRegular } from '@fluentui/react-icons'
import { AnimateLink } from '../AnimateLink/AnimateLink.component.tsx'

export const Post = (props: IPost) => {
	return (
		<Card size="large" className={styles.post}>
			<div className={styles.imageBlock}>
				<WpImage className={styles.image} imageId={props.featured_media} />
			</div>
			<div className={styles.content}>
				<Title2>{props.title.rendered}</Title2>
				<div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}></div>
				<AnimateLink href={`/post/${props.slug}`}><Button appearance="primary" icon={<TextboxMoreRegular />}>Читать полностью</Button></AnimateLink>
			</div>
		</Card>
	)
}
