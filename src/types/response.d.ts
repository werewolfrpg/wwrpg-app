export interface Paginated<T> {
	meta: {
		pageNumber: number
		totalPageNumber: number
		entries: number
	}
	data: T[]
}
