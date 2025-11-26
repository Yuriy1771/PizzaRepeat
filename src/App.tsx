import React, {createContext, useState} from 'react';
import './scss/app.scss';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import {Route, Routes} from "react-router-dom";
import NotFound from "./Components/other/NotFound/NotFound";
import Cart from "./Components/Cart/Cart";

export type SearchContextType = {
  search: string | null
  setSearch: React.Dispatch<React.SetStateAction<string | null>>
}

export const SearchValue = createContext<SearchContextType>({
  search: '',
  setSearch: () => {}
})

function App() {
  const [search, setSearch] = useState<string | null>(null)

  return (
    <SearchValue value={{search, setSearch}}>
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Routes>
          <Route path={'/'} element={<Content search={search}/>}/>
          <Route path={'/*'} element={<NotFound/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
        </Routes>
      </div>
    </div>
    </SearchValue>
  );
}

export default App;
