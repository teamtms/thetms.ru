import { Card, Title2, Title3 } from '@fluentui/react-components'
import type { FineProps } from './Fine.props.ts'
import { PassportCard } from '@/components/PassportCard/PassportCard.component.tsx';

export const Fine = (props: FineProps) => {
	return (
		<Card size="large">
			<Title2><span dangerouslySetInnerHTML={{ __html: props.fine.title.rendered }}></span></Title2>
			<div dangerouslySetInnerHTML={{ __html: props.fine.content.rendered }}></div>
			<Title3>Сумма: {props.fine.acf.amount} руб ТМС</Title3>
			<Title3>Номер: #{props.fine.id}</Title3>
			<PassportCard userId={props.fine.acf.reciever}></PassportCard>
		</Card>
	)
}
