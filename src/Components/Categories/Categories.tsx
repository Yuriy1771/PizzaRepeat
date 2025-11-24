import React, {FC} from 'react'
import {TypesCategoryProps} from "./typeCategory";

const categoryList = [
  {id: 0, title: "Все"},
  {id: 1, title: "Мясные"},
  {id: 2, title: "Вегетарианская"},
  {id: 3, title: "Острые"},
  {id: 4, title: "Додстеры"},
  {id: 5, title: "Напитки"},
]

const Categories:FC<TypesCategoryProps> = ({setActiveCategory, activeCategory}) => {

  const onClickCategory = (id:number) => {
    setActiveCategory(id)
  }

  return (
    <div className="categories">
      <ul>
        {categoryList.map(category => <li key={category.id} className={activeCategory === category.id ? 'active' : ''} onClick={() => onClickCategory(category.id)}>{category.title}</li>)}
      </ul>
    </div>
  )
}

export default Categories