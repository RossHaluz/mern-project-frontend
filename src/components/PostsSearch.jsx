import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getSearchPosts } from 'redux/post/operatins';

const PostsSearch = () => {
const dispatch = useDispatch();
const [seachName, setSeachName] = useSearchParams();
const serchQuery = seachName.get('query') || "";

const onChangeInput = query => {
  const queryName = query !== "" ? {query} : {};
  setSeachName(queryName);
}

const onSubmitForm = e => {
  e.preventDefault();
}

useEffect(() => {
dispatch(getSearchPosts(serchQuery))
}, [dispatch, serchQuery])

  return <form className="lg:w-[30%] lg:flex lg:m-auto lg:my-5 w-full relative" onSubmit={onSubmitForm}>
  <input type="search" placeholder="Пошук" name="searchName" value={serchQuery} onChange={e => onChangeInput(e.target.value)} className='w-full h-auto py-4 px-4 text-xs border border-solid-gray-500 rounded-[50px] outline-none'/>
  <button type="submit" className='absolute top-4 right-5 text-[18px]'><AiOutlineSearch/></button>
</form>
}

export default PostsSearch
