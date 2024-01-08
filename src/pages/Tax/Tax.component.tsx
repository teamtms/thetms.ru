import { Container } from '@/components/Container/Container.component'
import { Spinner, Table, TableCell, TableCellLayout, TableRow } from '@fluentui/react-components'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { generateProfit } from '@/functions/generateProfit'
import { PersonRegular, BuildingRegular, OrganizationRegular, MoneyCalculatorRegular } from '@fluentui/react-icons'

const Tax = () => {
	const { username } = useParams()

	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: ['tax', username],
		queryFn: () => generateProfit(username ? username : '')
	})

	return (
		<Container>
			{isLoading && <Spinner />}
			{isError && error.message}
			{isSuccess && <Table>
				<TableRow>
					<TableCell>
						<TableCellLayout media={<PersonRegular />}>
							Имя пользователя
						</TableCellLayout>
					</TableCell>
					<TableCell>{username}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<TableCellLayout media={<BuildingRegular />}>
							Кол-во организаций
						</TableCellLayout>
					</TableCell>
					<TableCell>{data.orgs.length}</TableCell>
				</TableRow>
				{data.orgs.map((item) =>
					<TableRow>
						<TableCell>
							<TableCellLayout media={<OrganizationRegular />}>
								<span dangerouslySetInnerHTML={{ __html: item.title }}></span>
							</TableCellLayout>
						</TableCell>
						<TableCell>{item.profit}</TableCell>
					</TableRow>
				)}
				<TableRow>
					<TableCell>
						<TableCellLayout media={<MoneyCalculatorRegular />}>
							Итого
						</TableCellLayout>
					</TableCell>
					<TableCell>{data.sum}</TableCell>
				</TableRow>
			</Table>}
		</Container>
	)
}

export default Tax
