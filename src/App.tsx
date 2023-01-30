import { useState } from 'react'
import './styles/App.scss';
import TopMenu from './components/topMenu/TopMenu';
import Search from './components/search/Search';


function App() {

  return (
      <main className="container">
        <TopMenu />
        <Search />
      </main>  
  )
}

export default App
