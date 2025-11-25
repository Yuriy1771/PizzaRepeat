import {Dispatch, FC, SetStateAction, useState} from "react";
import s from './Pagination.module.scss'

export type TypesPaginationProps = {
    totalItems: number;
    setCurPage: Dispatch<SetStateAction<number>>
    curPage: number
}

export const Pagination:FC<TypesPaginationProps> = ({totalItems, setCurPage, curPage}) => {
    const totalPages = []
    for(let i = 0; i <= totalItems; i = i + 10) {
        totalPages.push(i)
    }

    return (
        <div className={s.wrapperPag}>
            <div className={s.arrowBack} onClick={() => setCurPage(curPage - 1)}>&lt;</div>
            <div className={s.pagination}>
                {totalPages.map((m,i) => <div className={s.paginationItem}>{i}</div>)}
            </div>
            <div className={s.arrowNext} onClick={() => setCurPage(curPage+1)}>&gt;</div>
        </div>
    )
}