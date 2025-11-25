import axios from "axios";

export const API = {
    getMenu(activeCategory, selectedSort, search, curPage) {
        const idCategory = activeCategory === 0 ? '' : `category=${activeCategory}`
        const order = selectedSort.sort.includes('-') ? 'asc' : 'desc'
        const sortBy = selectedSort.sort.replace('-', '')
        const searchFor = search && search.length > 0 ? `&search=${search}` : ''

        return axios.get(`https://67bd631a321b883e790c3eac.mockapi.io/items?${idCategory}&sortBy=${sortBy}&order=${order}${searchFor}&limit=6&page=${curPage}`).then(response => response.data)
    }
}