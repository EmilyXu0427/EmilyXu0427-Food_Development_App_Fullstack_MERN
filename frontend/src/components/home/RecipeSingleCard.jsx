
import { Link } from 'react-router-dom';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import RecipeModel from './RecipeModel';
import { CiCircleList, CiClock2} from "react-icons/ci";
import { FaOrcid, FaIdCard } from "react-icons/fa";

const RecipeSingleCard = ({ recipe }) => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className='border-2 border-black-800 rounded-lg px-4 bg-gray-100 py-2 m-4 relative hover:shadow-xl'>
      <h2 className='absolute top-1 right-1 px-4 py-1 bg-purple-300 rounded-lg'>
        {recipe.projectID}
      </h2>
      
      <div className='flex justify-start items-center gap-x-2'>
        <FaIdCard className='text-green-300 text-2xl' />
        <h2 className='my-1'>{recipe.recipeID}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <FaOrcid className='text-green-300 text-2xl' />
        <h2 className='my-1'>{recipe._id}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <CiCircleList className='text-green-500 text-3xl' />
        <h2 className='my-1'>{recipe.ingredients}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <CiClock2 className='text-green-500 text-2xl' />
        <h2 className='my-1'>{recipe.updatedAt}</h2>
      </div>

      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModel(true)}
        />
        <Link to={`/books/details/${recipe._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/books/edit/${recipe._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/books/delete/${recipe._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
      {showModel && (
        <RecipeModel recipe={recipe} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
};

export default RecipeSingleCard;
