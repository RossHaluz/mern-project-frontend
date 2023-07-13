import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const CategorySearch = () => {
const [query, setQuery] = useState('')

const handleSubmitSearch = e => {
    e.preventDefault()
}

  return <form className="lg:w-[30%] lg:flex lg:m-auto lg:my-5 my-5 w-full relative" onSubmit={handleSubmitSearch}>
  <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Пошук" name="search" className='w-full h-auto py-4 px-4 text-xs border border-solid-gray-500 rounded-[50px] outline-none'/>
  <button type="submit" className='absolute top-4 right-5 text-[18px]'><AiOutlineSearch/></button>
</form>

}

export default CategorySearch
