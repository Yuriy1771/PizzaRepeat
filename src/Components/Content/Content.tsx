import React, {FC} from 'react'
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaCard from "./PizzaCard/PizzaCard";
import menu from "../../assets/menu.json"

const Content:FC = () => {
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
                      {menu.map(m => <PizzaCard key={m.id} {...m}/>)}
                  </div>
              </div>
          </div>
      </div>
    );
}


export default Content