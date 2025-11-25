import React, {useContext, useEffect, useState} from 'react'
import clear from '../../../assets/img/clear.png'
import search from '../../../assets/img/search.png'
import s from './Search.module.scss'
import {SearchValue} from "../../../App";

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const searchContext = useContext(SearchValue)
  if (!searchContext) {
    throw new Error("context error");
  }
  const {setSearch} = searchContext

  useEffect(() => {
    setSearch(inputValue)
  },[inputValue])

    return (
      <div className={s.searchWrapper}>
         <span className={s.searchIcon}><img src={search} alt="search"/></span>
            <input type="text" placeholder="введите название пиццы ..." className={s.search}
                   value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        {inputValue && <span className={s.clearIcon} onClick={() => setInputValue('')}><img src={clear} alt="clear"/></span>}
      </div>
    )
}

export default Search