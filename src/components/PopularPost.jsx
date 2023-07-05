import React from 'react'
import { Link } from 'react-router-dom';

const PopularPost = ({post}) => {
  const {_id: id, title} = post;
  return (
    <div className='bg-gray-600 mt-1'> 
      <Link to={`/${id}`} className='line-clamp-2 flex text-xs p-2 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer'>
      {title}
      </Link>
    </div>
  )
}

export default PopularPost
