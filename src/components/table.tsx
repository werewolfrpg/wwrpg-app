import { useState } from 'react'
import {
	Card,
	Table,
	TableBody,
	TableContainer,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow
} from '@mui/material'

export interface TableProps<T> {
	data: T[]
	count: number
	total: number
	header: JSX.Element
	row: (data: T, index: number) => JSX.Element
	changePage?: (page: number) => void
}

export default <T extends any>({ data, count, total, header, row, changePage }: TableProps<T>) => {
	const [page, setPage] = useState(0)

	return (
		<TableContainer component={Card}>
			<Table>
				<TableHead>
					<TableRow style={{ cursor: 'auto' }} hover={false}>
						{header}
					</TableRow>
				</TableHead>
				<TableBody>{data.map((entry, i) => row(entry, i))}</TableBody>
				<TableFooter>
					<TableRow style={{ cursor: 'auto' }} hover={false}>
						<TablePagination
							rowsPerPageOptions={[]}
							onPageChange={(_, newPage) => {
								setPage(newPage)

								if (changePage) {
									changePage(newPage)
								}
							}}
							count={total}
							rowsPerPage={count}
							page={page}
							style={{ border: 'none' }}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	)
}
