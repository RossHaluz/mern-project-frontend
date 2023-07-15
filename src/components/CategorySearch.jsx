import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { getSearchCategory } from 'redux/post/operatins';

const CategorySearch = () => {
  const dispatch = useDispatch();
const {category} = useParams();
const [query, setQuery] = useSearchParams();
const searchName = query.get('query') || "";


const handleOnChangeForm = query => {
  const searchQuery = query !== "" ? {query} : {}
  setQuery(searchQuery)
}

useEffect(() => {
  dispatch(getSearchCategory({category, searchName}))
}, [dispatch, category, searchName])

  return <form className="lg:w-[30%] lg:flex lg:m-auto lg:my-5 my-5 w-full relative" >
  <input type="search" placeholder="Пошук" name="searchName" value={searchName} onChange={e => handleOnChangeForm(e.target.value)} className='w-full h-auto py-4 px-4 text-xs border border-solid-gray-500 rounded-[50px] outline-none'/>
  <button type="submit" className='absolute top-4 right-5 text-[18px]'><AiOutlineSearch/></button>
</form>

}

export default CategorySearch
