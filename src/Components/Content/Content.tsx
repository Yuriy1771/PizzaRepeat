import React, {FC, useEffect, useState} from 'react'
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaCard from "./PizzaCard/PizzaCard";
import Skeleton from "../../assets/Skeleton/Skeleton";
import {TypeSelectedSort} from "../Sort/typeSort";
import {Pagination} from "../other/Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {menuThunk} from "../../redux/slices/filterSlice";

type ContentTypesProps = {
    search: string | null
}

const Content:FC<ContentTypesProps> = ({search}) => {
    const [activeCategory, setActiveCategory] = useState<number>(0)
    const [selectedSort, setSelectedSort] = useState<TypeSelectedSort>({name: 'популярности', sort: 'rating', id: 0})
    const menu = useAppSelector(state => state.filter.menu)
    const preloader = useAppSelector(state => state.filter.preloader)

    const [curPage, setCurPage] = useState(1)
    const dispatch = useAppDispatch()
    useEffect(() => {
        const fetch = async () => {
            dispatch(menuThunk({activeCategory, selectedSort, search, curPage}))
        }
        fetch()
        window.scrollTo(0, 0)
    }, [activeCategory, selectedSort, search, curPage])

    return (
      <div className="wrapper">
          <div className="content">
              <div className="container">
                  <div className="content__top">
                      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                      <Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
                  </div>
                  <h2 className="content__title">Все пиццы</h2>
                  <div className="content__items">
                      {preloader
                          ? [... new Array(8)].map((a,i) => <Skeleton key={i}/>)
                          : menu?.map(m => preloader ? <Skeleton/> : <PizzaCard key={m.id} {...m}/>)}
                  </div>
              </div>
              {activeCategory == 0 && <Pagination totalItems={18} setCurPage={setCurPage} curPage={curPage}/>}
          </div>
      </div>
    )
}

export default Content