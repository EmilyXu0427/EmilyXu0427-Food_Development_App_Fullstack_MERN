import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import RecipeCard from '../components/home/RecipeCard';
import { IoMdAddCircle } from "react-icons/io";


const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/recipes')
            .then((response) => {
                {/*debugging*/ }
                // console.log('API response:', response);
                // console.log('API response data:', response.data);
                setRecipes(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-5xl font-semibold text-center font-sans text-purple-800 my-10 rounded-lg p-8 '> Product Development Recipe List</h1>

                {/* link to create a new recipe */}
                <Link to='/recipes/create'>
                    <IoMdAddCircle  className='text-purple-600 text-5xl items-center' />
                </Link>
            </div>

            {/* Load recipes into the home page */}
            {loading ? (
                <Spinner />
            ) : (
                <RecipeCard recipes={recipes} />
            )}
        </div>
    );
};

export default Home;