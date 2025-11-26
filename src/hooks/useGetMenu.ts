import {useEffect, useState} from "react";
import {API} from "../Dal/api";
import {useAppDispatch} from "../redux/store";
import {menuThunk} from "../redux/slices/filterSlice";

export type MenuType = {
    "id": number,
    "imgUrl": string,
    "title": string,
    "types": [],
    "sizes": [],
    "price": number,
    "category": number,
    "rating": number
}

export type UseGetMenuProps = {
    activeCategory: number
    selectedSort: { name: string, sort: string }
    search: string | null
    curPage: number
}

export const useGetMenu = ({activeCategory, selectedSort, search, curPage}: UseGetMenuProps) => {
    const [menu, setMenu] = useState<MenuType[]>([])
    const [preloader, setPreloader] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    useEffect(() => {
        setPreloader(true)
        const fetch = async () => {
            dispatch(menuThunk({activeCategory, selectedSort, search, curPage}))
            setPreloader(false)
            //     } catch {
            //         console.log('error fetching menu')
            //     }
        }
        fetch()
        window.scrollTo(0, 0)
    }, [activeCategory, selectedSort, search, curPage])

    return {menu, preloader}
}