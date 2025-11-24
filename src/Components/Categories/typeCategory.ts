import {Dispatch, SetStateAction} from "react";

export type TypesCategoryProps = {
    activeCategory: number
    setActiveCategory: Dispatch<SetStateAction<number>>
}