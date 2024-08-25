import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateRecipe from './pages/CreateRecipe'
import DeleteRecipe from './pages/DeleteRecipe'
import EditRecipe from './pages/EditRecipe'
import Home from './pages/Home'
import ShowRecipe from './pages/ShowRecipe'
import RecipeChatbot from './pages/RecipeChatbot';


const App = () => {
  return (
   <Routes>
    {/* This route matches the root URL. When the user navigates to the root URL, the Home component will be rendered */}
    <Route path='/' element={<Home />} /> 
    <Route path='/recipes/create' element={<CreateRecipe />} />
    <Route path='/recipes/details/:id' element={<ShowRecipe />} />
    <Route path='/recipes/edit/:id' element={<EditRecipe />} />
    <Route path='/recipes/delete/:id' element={<DeleteRecipe />} />
    {/* Add page for chatbot */}
    <Route path='/recipes/chatbot' element={<RecipeChatbot />} />
   </Routes>
  )
}

export default App
