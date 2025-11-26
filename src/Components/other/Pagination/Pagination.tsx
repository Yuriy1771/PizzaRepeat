import {Dispatch, FC, SetStateAction, useState} from "react";
import s from './Pagination.module.scss'

export type TypesPaginationProps = {
    totalItems: number;
    setCurPage: Dispatch<SetStateAction<number>>
    curPage: number
}

export const Pagination:FC<TypesPaginationProps> = ({totalItems, setCurPage, curPage}) => {
    const totalPages = []
    const pagesCount = Math.ceil(totalItems / 6)
    for(let i = 1; i <= totalItems / 6; i = i + 1) {
        totalPages.push({id: i, curPage: i})
    }

    return (
        <div className={s.wrapperPag}>
            <div className={s.arrowBack} onClick={() => setCurPage(p => Math.max(p - 1, 1))}>&lt;</div>
            <div className={s.pagination}>
                {totalPages.map((m,i) => <div key={i} className={curPage === m.id ? s.paginationItemActive : s.paginationItem}
                                         onClick={() => setCurPage(m.id)}>{m.curPage}</div>)}
            </div>
            <div className={s.arrowNext} onClick={() => setCurPage(p => Math.min(p + 1, pagesCount))}>&gt;</div>
        </div>
    )
}