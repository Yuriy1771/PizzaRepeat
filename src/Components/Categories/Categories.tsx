import React, {FC} from 'react'
import {TypesCategoryProps} from "./typeCategory";
import {useAppSelector} from "../../redux/store";

const Categories:FC<TypesCategoryProps> = ({setActiveCategory, activeCategory}) => {
  const categories = useAppSelector(state => state.filter.categories)

  return (
    <div className="categories">
      <ul>
        {categories.map(category => <li key={category.id} className={activeCategory === category.id ? 'active' : ''} onClick={() => setActiveCategory(category.id)}>{category.title}</li>)}
      </ul>
    </div>
  )
}

export default Categories