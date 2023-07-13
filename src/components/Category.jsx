import { Link } from 'react-router-dom';

const Category = ({item}) => {

  return (
    <div className='bg-gray-600 mt-1'> 
      <Link to={`/category/${item}`} className='line-clamp-2 flex text-xs p-2 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer'>
      {item}
      </Link>
    </div>
  )
}

export default Category
