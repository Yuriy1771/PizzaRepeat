import axios from "axios";

export const API = {
    getMenu(activeCategory, selectedSort) {
        const idCategory = activeCategory === 0 ? '' : activeCategory
        const order = selectedSort.sort.includes('-') ? 'asc' : 'desc'
        const sortBy = selectedSort.sort.replace('-', '')
        return axios.get(`https://67bd631a321b883e790c3eac.mockapi.io/items?category=${idCategory}&sortBy=${sortBy}&order=${order}`).then(response => response.data)
    }
}