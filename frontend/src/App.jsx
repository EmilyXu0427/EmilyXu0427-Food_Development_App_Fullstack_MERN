import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateRecipe from './pages/CreateRecipe'
import DeleteRecipe from './pages/DeleteRecipe'
import EditRecipe from './pages/EditRecipe'
import Home from './pages/Home'
import ShowRecipe from './pages/ShowRecipe'


const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} /> /* This route matches the root URL. When the user navigates to the root URL, the Home component will be rendered */
    <Route path='/recipes/create' element={<CreateRecipe />} />
    <Route path='/recipes/details/:id' element={<ShowRecipe />} />
    <Route path='/recipes/edit/:id' element={<EditRecipe />} />
    <Route path='/recipes/delete/:id' element={<DeleteRecipe />} />
   </Routes>
  )
}

export default App
