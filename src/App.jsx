import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar/SearchBar'
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchResulat from './components/SearchResulat'
import LikedImagesList from './components/LikedImagesList'


import { useSelector, useDispatch } from "react-redux";
import { PageEnum } from './utils/EnumApp'

function home() {
  return (
      <>
        <div className="flex flex-col h-screen">
          <div className=" w-full z-10 bg-white shadow-md">
            <SearchBar />
          </div>
          <div className=" h-full mt-5"> {/* Ajoutez une marge pour éviter que Welcome soit masqué */}
            <Welcome />
          </div>
        </div>
      </>
  )
}

function searchResulat() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="fixed top-0 w-full z-10 bg-white shadow-md">
          <SearchBar />
        </div>
        <div className="mt-[80px]"> {/* Ajoutez une marge pour éviter que Welcome soit masqué */}
          <SearchResulat />
        </div>
      </div>
  </>
  )
}
function favoritePics() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="fixed top-0 w-full z-10 bg-white shadow-md">
          <SearchBar />
        </div>
        <div className="mt-[80px]"> {/* Ajoutez une marge pour éviter que Welcome soit masqué */}
          <LikedImagesList />
        </div>
      </div>
  </>
  )
}

function App() {
  const dispatch = useDispatch();
  const appState = useSelector( (state) => state.appState.appState)
  return (
    <>
      { appState == PageEnum.HOME &&
        home()
      }
      { appState == PageEnum.SEARCH &&
        searchResulat()
      }
        { appState == PageEnum.LIKED_LIST &&
        favoritePics()
      }
    </>
  )
}

export default App
