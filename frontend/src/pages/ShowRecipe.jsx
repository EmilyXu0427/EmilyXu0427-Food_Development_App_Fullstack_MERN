import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import showRecipeBG from '../pages/picture/showRecipeBG.jpg'

const ShowRecipe = () => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    // <div className='p-4'>
    <div className ='bg-cover bg-color h-screen w-screen'
    style = {{ backgroundImage:`url(${showRecipeBG})`}}>
      <BackButton />
      <h1 className='text-5xl font-semibold text-center font-sans text-black my-10 rounded-lg p-8'>Recipe Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col font-sans text-xl bg-gray-100 rounded-xl w-fit p-10 mx-auto'>
          <div className='my-4'>
            <span className='text-2xl mr-4 font-semibold text-pink-700'>Id:</span>
            <span>{recipe._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 font-semibold text-pink-700'>Project ID:</span>
            <span>{recipe.projectID}</span>
          </div>
          
          <div className='my-4'>
            <span className='text-2xl mr-4 font-semibold text-pink-700'>Recipe ID:</span>
            <span>{recipe.recipeID}</span>
          </div>
          
          <div className='my-4'>
            <span className='text-2xl mr-4 font-semibold text-pink-700'>Ingredients:</span>
            <span>{recipe.ingredients}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 font-semibold text-pink-700'>Cook Instruction:</span>
            <span>{recipe.cookInstruction}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 font-semibold text-pink-700'>Comment:</span>
            <span>{recipe.comment}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 font-semibold text-pink-700'>Create Time:</span>
            <span>{new Date(recipe.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 font-semibold text-pink-700'>Last Update Time:</span>
            <span>{new Date(recipe.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowRecipe;