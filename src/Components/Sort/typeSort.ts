import {Dispatch, SetStateAction} from "react";

export type TypesSortProps = {
    selectedSort: TypeSelectedSort;
    setSelectedSort: Dispatch<SetStateAction<TypeSelectedSort>>
}

export type TypeSelectedSort = {
    name: string,
    sort: string
    id: number
}