import {useEffect, useState} from "react";
import {API} from "../Dal/api";

export type MenuType = {
    "id": number,
    "imgUrl": string,
    "title":string,
    "types": [],
    "sizes": [],
    "price": number,
    "category": number,
    "rating": number
}

type UseGetMenuProps = {
    activeCategory: number
    selectedSort: {name: string, sort: string}
    search: string | null
    curPage: number
}

export const useGetMenu = ({activeCategory, selectedSort, search, curPage}:UseGetMenuProps) => {
    const [menu, setMenu] = useState<MenuType[]>([])
    const [preloader, setPreloader] = useState<boolean>(true)

    useEffect(() => {
        setPreloader(true)
        const fetch = async() => {
            const data = await API.getMenu(activeCategory, selectedSort, search, curPage)
            setMenu(data)
            setPreloader(false)
        }
        fetch()
        window.scrollTo(0, 0)
    }, [activeCategory, selectedSort, search, curPage])

    return {menu, preloader}
}