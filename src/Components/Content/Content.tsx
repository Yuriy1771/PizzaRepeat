import React, {createContext, FC, useContext, useState} from 'react'
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaCard from "./PizzaCard/PizzaCard";
import Skeleton from "../../assets/Skeleton/Skeleton";
import {useGetMenu} from "../../hooks/useGetMenu";
import {TypeSelectedSort} from "../Sort/typeSort";

// const some = createContext(null)

const Content:FC = () => {
    // const value = useContext(some)
    const [activeCategory, setActiveCategory] = useState<number>(0)
    const [selectedSort, setSelectedSort] = useState<TypeSelectedSort>({name: 'популярности', sort: 'rating', id: 0})

    const {menu, preloader} = useGetMenu({activeCategory, selectedSort}) //запрос за меню

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
          </div>
      </div>
    );
}


export default Content