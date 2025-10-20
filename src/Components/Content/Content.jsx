import React from 'react'
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaCard from "./PizzaCard/PizzaCard";

const Content = () => {

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
                      <PizzaCard price={400}/>
                      <PizzaCard price={450}/>
                      <PizzaCard price={350}/>
                      <PizzaCard price={250}/>
                      <PizzaCard price={150}/>
                      <PizzaCard price={850}/>
                      <PizzaCard price={450}/>
                      <PizzaCard price={250}/>
                  </div>
              </div>
          </div>
      </div>
    );
}


export default Content