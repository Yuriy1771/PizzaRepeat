import React, {createContext, useState} from 'react';
import './scss/app.scss';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import {Route, Routes} from "react-router-dom";

export const searchContext = createContext({})

function App() {
    const [searchValue, setSearchValue] = useState('')
    return (
      <div className="wrapper">
          <searchContext.Provider value={{searchValue, setSearchValue}}>
              <Header/>
              <div className="content">
                  <Routes>
                      <Route path={'/'} element={<Content/>}/>
                  </Routes>
              </div>
          </searchContext.Provider>
      </div>
    );
}

export default App;
