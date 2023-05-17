import { useState } from 'react'
import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow
} from '@mui/material'

interface TableProps<T> {
	data: T[]
	count: number
	total: number
	headers: string[]
	row: (data: T, index: number) => JSX.Element
}

export default <T extends any>({ data, count, total, headers, row }: TableProps<T>) => {
	const [page, setPage] = useState(0)

	return (
		<TableContainer component={Card}>
			<Table>
				<TableHead>
					<TableRow style={{ cursor: 'auto' }} hover={false}>
						{headers.map((header, i) => (
							<TableCell align="center" key={i}>
								{header}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>{data.map((entry, i) => row(entry, i))}</TableBody>
				<TableFooter>
					<TableRow style={{ cursor: 'auto' }} hover={false}>
						<TablePagination
							rowsPerPageOptions={[]}
							onPageChange={(_, newPage) => setPage(newPage)}
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
