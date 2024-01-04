import { Card, Title2, Title3 } from '@fluentui/react-components'
import type { FineProps } from './Fine.props.ts'
import { PassportCard } from '@/components/PassportCard/PassportCard.component';

export const Fine = (props: FineProps) => {
	return (
		<Card size="large">
			<Title2>{props.fine.title.rendered}</Title2>
			<div dangerouslySetInnerHTML={{ __html: props.fine.content.rendered }}></div>
			<Title3>Сумма штрафа: {props.fine.acf.amount} руб ТМС</Title3>
			<PassportCard userId={props.fine.acf.reciever}></PassportCard>
		</Card>
	)
}
