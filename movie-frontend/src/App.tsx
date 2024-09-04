import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import EachMovie from './Pages/EachMovie'
import SearchPage from './Pages/SearchPage'

const App = () => {
  return (
    <React.Fragment>
      <header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:idOfMovie" element={<EachMovie/>} />
          <Route path="/search" element={<SearchPage/>} />
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App
