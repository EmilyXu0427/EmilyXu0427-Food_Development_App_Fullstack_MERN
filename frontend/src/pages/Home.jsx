import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import RecipeCard from '../components/home/RecipeCard';
import { IoMdAddCircle } from 'react-icons/io';
import homeBG from '../pages/picture/homeBG.jpg';


const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    //create nagivate to different web page
    const navigate = useNavigate();

    //handle click to recipechatbot
    const handleClickChatbot = () => {
        navigate('/recipes/chatbot');
    };

    //hanle click to create new recipe
    const handleClickCreatRecipe = () => {
        navigate('/recipes/create');
    }

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
        <div
            className='bg-cover bg-center h-screen w-screen'
            style={{ backgroundImage: `url(${homeBG})` }}>
            <div className='flex items-center'>
                <div>
                    <h1 className='text-5xl font-semibold text-center font-sans text-purple-800 my-10 rounded-lg p-8 '> Product Development Recipe List</h1>
                </div>
                <div className='space-y-4 space-x-4'>
                    {/* Link to create new recipe page */}
                    <button
                        onClick={handleClickCreatRecipe}
                        className="bg-purple-600 text-white font-semibold font-sans text-xl text-yellow-100 rounded-3xl p-3"
                    >Create new recipe</button>

                    {/* Link to recipe chatbot page */}
                    <button
                        onClick={handleClickChatbot}
                        className="bg-purple-600 text-white font-semibold font-sans text-xl text-yellow-100 rounded-3xl p-3"
                    >Recipe Chatbot</button>
                </div>
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