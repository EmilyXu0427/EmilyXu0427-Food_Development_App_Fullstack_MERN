import React from 'react'
import RecipeSingleCard from './RecipeSingleCard';

const RecipeCard = ({ recipes }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {recipes.map((item) => (
        <RecipeSingleCard key={item._id} recipe={item} />
      ))}
    </div>
  );
};

export default RecipeCard;
