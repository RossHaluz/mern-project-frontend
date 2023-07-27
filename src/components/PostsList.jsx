import Pagination from "./Pagination"
import PostItem from "./PostItem"
import { Link } from "react-router-dom"

const PostsList = ({posts, setQuery, getQuery, totalPages, currentPage}) => {

  return  <div className="w-full flex flex-col gap-6 md:basis-4/5">
  <ul className="flex justify-center gap-3 flex-wrap md:hidden">
    {posts?.flatMap(post => post.category).filter((item, idx, arr) => arr.indexOf(item) === idx).map(item => {
      return <li key={item} className="border border-solid border-gray-400 rounded-lg">
        <Link to={`/category/${item}`}  className="py-2 px-4 text-xs">{item}</Link>
      </li>
    })}
  </ul>

  <ul className="flex flex-col gap-10">
  {posts?.map(item => item && <PostItem key={item._id} item={item}/>)}
</ul>

<Pagination setQuery={setQuery} getQuery={getQuery} totalPages={totalPages} currentPage={currentPage}/>
</div>
}

export default PostsList
