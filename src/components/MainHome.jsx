import React from 'react'
import RYME from './RYME'
import MyHome from './MyHome'
import Goals from './Goals'
import FAM from './FAM'
import FavFoods from './FavFoods'
import FavSports from './FavSports'
import DefaultHome from './DefaultHome'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function MainHome() {
  return (
    <>
      <RYME />
      <Routes>
        <Route path="" element={<div>Hello Image Here</div>} />
        <Route path="myhome" element={<MyHome />} />
        <Route path="goals" element={<Goals />} />
        <Route path="fam" element={<FAM />} />
        <Route path="favfoods" element={<FavFoods />} />
        <Route path="favsports" element={<FavSports />} />
      </Routes>
    </>
  )
}

export default MainHome