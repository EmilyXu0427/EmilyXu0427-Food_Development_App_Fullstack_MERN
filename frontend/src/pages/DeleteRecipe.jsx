import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteRecipe = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});

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

  const handleDeleteRecipe = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/recipes/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Cannot delete the recipe. Please check console for error message');
        console.log(error);
      });
  }


  // function to navigate to homepage
  const handleGoHome = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className='p-4'>
      <h1 className='text-5xl font-semibold text-center font-sans text-black my-10 rounded-lg p-8 '>Do you really want to delete this recipe?</h1>
      {loading ? <Spinner /> : ''}

      {/* show the recipe details */}
      <div className='flex flex-col items-center w-[800px] p-8 mx-auto'>
        <div className='flex flex-col border-2 border-black rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{recipe._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Project ID</span>
            <span>{recipe.projectID}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Recipe ID</span>
            <span>{recipe.recipeID}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Ingredients</span>
            <span>{recipe.ingredients}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Cook Instruction</span>
            <span>{recipe.cookInstruction}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(recipe.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(recipe.updatedAt).toString()}</span>
          </div>
        </div>


        <button
          className='p-4 bg-black font-bold text-white rounded-xl m-8 w-1/2'
          onClick={handleDeleteRecipe}
        >
          Yes, Delete it
        </button>

        <button
          className='p-4 bg-black font-bold text-white rounded-xl m-8 w-1/2'
          onClick={handleGoHome}
        >
          No, I regret
        </button>
      </div>
    </div>
  )
}

export default DeleteRecipe
