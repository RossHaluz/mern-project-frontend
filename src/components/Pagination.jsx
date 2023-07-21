import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import ReactPaginate from 'react-paginate'

const Pagination = ({setQuery, totalPages, currentPage}) => {

  const handlePageClick = ({selected}) => {
    setQuery({page: selected + 1})
  }

  return <div>
  <ReactPaginate
  breakLabel="..."
  onPageActive={window.scrollTo({
   top: 0,
   behavior: 'smooth',
  })}
  initialPage={currentPage}
  nextLabel={
   <span className='p-3 flex items-center justify-center bg-gray-400 rounded-md text-white font-bold'>
       <BsChevronRight/>
   </span>
  }
  onPageChange={handlePageClick}
  pageRangeDisplayed={3}
  pageCount={totalPages}
  previousLabel={
   <span className='p-3 flex items-center justify-center bg-gray-400 rounded-md text-white font-bold'>
       <BsChevronLeft/>
   </span>
  }
  containerClassName='flex items-center justify-center mt-8 mb-4 gap-4'
  pageClassName='block border border-solid border-gray-300 hover:bg-gray-400 hover:text-white w-10 h-10 flex items-center justify-center rounded-md'
  activeClassName='bg-gray-400 text-white' 
  /></div> 
}

export default Pagination
