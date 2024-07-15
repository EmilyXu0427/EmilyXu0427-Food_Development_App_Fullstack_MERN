
import { AiOutlineClose } from 'react-icons/ai';
import { CiCircleList, CiClock2, CiFaceSmile, CiBullhorn } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";

const RecipeModel = ({ recipe, onClose }) => {
    return (
        <div
            className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-blue-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-1 bg-blue-300 rounded-lg'>
                    {recipe.projectID}
                </h2>
                <h4 className='my-2 text-gray-500'>{recipe._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <CiFaceSmile className='text-blue-800 text-2xl' />
                    <h2 className='my-1'>{recipe.recipeID}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <CiCircleList className='text-blue-800 text-2xl' />
                    <h2 className='my-1'>{recipe.ingredients}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiCookingPotFill className='text-blue-800 text-3xl' />
                    <h2 className='my-1'>{recipe.cookInstruction}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <FaPencilAlt className='text-blue-800 text-2xl' />
                    <h2 className='my-1'>{recipe.comment}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <CiClock2 className='text-blue-800 text-2xl' />
                    <h2 className='my-1'>{recipe.createdAt}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <CiClock2 className='text-blue-800 text-2xl' />
                    <h2 className='my-1'>{recipe.updatedAt}</h2>
                </div>


            </div>
        </div>
    );
};

export default RecipeModel;
