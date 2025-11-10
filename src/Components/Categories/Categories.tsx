import React, {FC, useState} from 'react'

const categoryList = [
  {id: 0, title: "Все"},
  {id: 1, title: "Мясные"},
  {id: 2, title: "Вегетарианская"},
  {id: 3, title: "Гриль"},
  {id: 4, title: "Острые"},
  {id: 5, title: "Закрытые"},
]


const Categories:FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0)

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