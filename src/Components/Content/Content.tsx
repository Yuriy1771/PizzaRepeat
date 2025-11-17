import React, {FC, useEffect, useState} from 'react'
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaCard from "./PizzaCard/PizzaCard";
import {API} from "../../Dal/api";

type MenuType = {
    "id": number,
    "imgUrl": string,
    "title":string,
    "types": [],
    "sizes": [],
    "price": number,
    "category": number,
    "rating": number
}
const Content:FC = () => {
    const [menu, setMenu] = useState<MenuType[]>([])

    useEffect(() => {
        const fetch = async() => {
        const data = await API.getMenu()
        setMenu(data)
        }
        fetch()
    }, [])
    return (
      <div className="wrapper">
          <div className="content">
              <div className="container">
                  <div className="content__top">
                      <Categories/>
                      <Sort/>
                  </div>
                  <h2 className="content__title">Все пиццы</h2>
                  <div className="content__items">
                      {menu?.map(m => <PizzaCard key={m.id} {...m}/>)}
                  </div>
              </div>
          </div>
      </div>
    );
}


export default Content