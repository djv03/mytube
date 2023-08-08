import React from 'react'
import { AppContext } from './context/contextApi'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResults from './components/SearchResults'
import VideoDetails from './components/VideoDetails'
function App() {

    return (
        <>
            <AppContext>
                <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Feed/>}/>
                    <Route path='/searchResult/:searchQuery' element={<SearchResults/>}/>
                    <Route path='/video/:id' element={<VideoDetails/>}/>
                </Routes>
                </BrowserRouter>
            </AppContext>
        </>
    )
}

export default App
