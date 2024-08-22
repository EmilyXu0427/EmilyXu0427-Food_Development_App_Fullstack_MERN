import { Link } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

const BackButton = () => {
    return (
        <div className='flex'>
          <Link
            // to={destination}
            to={'/'} //click the backbutton and direct to root addresss
            className='bg-purple-600 text-white px-6 py-3 rounded-lg w-fit'
          >
            <BsArrowLeftCircleFill className='text-5xl' />
          </Link>
        </div>
      );
};

export default BackButton
