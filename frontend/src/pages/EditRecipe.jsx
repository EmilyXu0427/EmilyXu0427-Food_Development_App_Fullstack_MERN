import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import updateRecipeBG from '../pages/picture/updateRecipeBG.jpg';

const EditRecipe = () => {
  const [projectID, setProjectID] = useState('');
  const [recipeID, setRecipeID] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cookInstruction, setCookInstruction] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams(); // access the parameters using the current url
  console.log(id);

  useEffect(()=> {
    setLoading(true);
    axios.get(`http://localhost:3000/recipes/${id}`)
    .then((response)=>{
      setProjectID(response.data.projectID);
      setRecipeID(response.data.recipeID);
      setIngredients(response.data.ingredients);
      setCookInstruction(response.data.cookInstruction);
      setComment(response.data.comment);
      setLoading(false);
      console.log('get the recipe successfully');
    }).catch((error)=> {
      setLoading(false);
      alert('Error occurs when loading recipe');
      console.log(error);
    })
  }, [])

  const handleEditRecipe = () => {
    const data = {
      projectID,
      recipeID,
      ingredients,
      cookInstruction,
      comment,
    };
    setLoading(true);
    axios
    .put(`http://localhost:3000/recipes/${id}`, data)
    .then(()=> {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert('Cannot update the recipe information. Please check the console');
      console.log(error);
    });
  }

  return (
    <div 
    className ="bg-cover bg-center h-screen w-screen" 
    style={{ backgroundImage: `url(${updateRecipeBG})` }}
    >
      <BackButton />
      <h1 className='text-5xl font-semibold text-center font-sans text-green-200 my-10 rounded-lg p-8 '>Update Recipe</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 rounded-xl w-[600px] h-[800px] p-4 mx-auto bg-green-200'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 font-semibold font-sans'>Project ID</label>
          <input
          type ='text'
          value={projectID}
          onChange={(e) => setProjectID(e.target.value)} 
          className='border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 font-semibold font-sans'>Recipe ID</label>
          <input
          type ='text'
          value={recipeID}
          onChange={(e) => setRecipeID(e.target.value)}
          className='border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 font-semibold font-sans'>Ingredients</label>
          <input
          type ='text'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className='border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 font-semibold font-sans'>CookInstruction</label>
          <textarea
          type ='text'
          value={cookInstruction}
          onChange={(e) => setCookInstruction(e.target.value)}
          className='h-32 border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 font-semibold font-sans'>Comment</label>
          <textarea
          type ='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className='h-32 border-2 border-gray-300 rounded-xl px-4 py-2 w-full'
          />
        </div>

        <button className='p-2 bg-black text-white font-sans font-semibold rounded-xl py-2 w-1/2 mx-auto' onClick={handleEditRecipe}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditRecipe
