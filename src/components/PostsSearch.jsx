import { AiOutlineSearch } from 'react-icons/ai';

const PostsSearch = ({setQuery, getQuery}) => {

const onChangeInput = query => {
  const queryName = query !== "" ? {query} : {};
  setQuery(queryName);
}

const onSubmitForm = e => {
  e.preventDefault();
}

  return <form className="lg:w-[30%] lg:flex lg:m-auto lg:my-5 w-full relative" onSubmit={onSubmitForm}>
  <input type="search" placeholder="Пошук" name="searchName" value={getQuery} onChange={e => onChangeInput(e.target.value)} className='w-full h-auto py-4 px-4 text-xs border border-solid-gray-500 rounded-[50px] outline-none'/>
  <button type="submit" className='absolute top-4 right-5 text-[18px]'><AiOutlineSearch/></button>
</form>
}

export default PostsSearch
