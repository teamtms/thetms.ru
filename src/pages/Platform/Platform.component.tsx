import { Container } from "@/components/Container/Container.component"
import { Card } from "@fluentui/react-components"

const Platform = () => {
	console.log(navigator)

	return (
		<Container>
			<Card>
				Браузер: {navigator.appName} ({navigator.appCodeName}) <br />
				Версия: {navigator.appVersion} <br />
				Платформа: {navigator.platform} <br />
				Кодовое имя: {navigator.product} ({navigator.productSub})
			</Card>
		</Container>
	)
}

export default Platform
