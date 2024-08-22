import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // all to navigate to different routes in react app

const CreateRecipe = () => {
  const [projectID, setProjectID] = useState(''); //initialize projectID state as empty string
  const [recipeID, setRecipeID] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cookInstruction, setCookInstruction] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false); // track asynchronous operation status, false means operation complete, true is in progress
  const navigate = useNavigate();
  const handleSaveRecipe = () => {
    const data = {
      projectID,
      recipeID,
      ingredients,
      cookInstruction,
      comment,
    };
    setLoading(true);
    axios
    .post('http://localhost:3000/recipes', data)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert('Recipe cannot be created. Please check console for error');
      console.log(error);
    });
  }

  return (
    <div className ='p-4'>
      <BackButton />
      <h1 className='text-5xl font-semibold text-center font-sans text-green-600 my-10 rounded-lg p-8 '>Create New Recipe</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-green-400 rounded-xl w-[600px] h-[800px] p-4 mx-auto bg-green-100'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>ProjectID</label>
          <input
          type ='text'
          value={projectID}
          onChange={(e) => setProjectID(e.target.value)} //update the projectID state
          className='border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>RecipeID</label>
          <input
          type ='text'
          value={recipeID}
          onChange={(e) => setRecipeID(e.target.value)}
          className='border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Ingredients</label>
          <input
          type ='text'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className='border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>CookInstruction</label>
          <textarea
          type ='text'
          value={cookInstruction}
          onChange={(e) => setCookInstruction(e.target.value)}
          className='h-32 border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Comment</label>
          <textarea
          type ='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className='h-32 border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <button className='p-2 bg-gray-300 border-gray-300 rounded-xl py-2 w-1/2 mx-auto' onClick={handleSaveRecipe}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateRecipe
