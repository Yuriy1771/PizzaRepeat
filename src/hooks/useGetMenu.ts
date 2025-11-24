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
}

export const useGetMenu = ({activeCategory, selectedSort}:UseGetMenuProps) => {
    const [menu, setMenu] = useState<MenuType[]>([])
    const [preloader, setPreloader] = useState<boolean>(true)

    useEffect(() => {
        setPreloader(true)
        const fetch = async() => {
            const data = await API.getMenu(activeCategory, selectedSort)
            setMenu(data)
            setPreloader(false)
        }
        fetch()
        window.scrollTo(0, 0)
    }, [activeCategory, selectedSort])

    return {menu, preloader}
}