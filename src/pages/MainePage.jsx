import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from "../redux/post/operatins";
import PostsList from "../components/PostsList";
import PopularPost from "../components/PopularPost";
import Category from "components/Category";
import PostsSearch from "components/PostsSearch";
import { useSearchParams } from "react-router-dom";
import ThreeDots from "components/Loader";

const MainePage = () => {
const dispatch = useDispatch();
const {posts, popularePosts, totalPages, currentPage, loading} = useSelector(state => state.post);
const [query, setQuery] = useSearchParams();
const getPage = query.get('page') || "";

useEffect(() => {
dispatch(getAllPosts({getPage}))
}, [dispatch, getPage])



  return (
    <div className="w-full md:max-w-[950px] mx-auto py-5 flex gap-5 flex-col">
        <PostsSearch/>
      <div className="flex justify-between md:gap-8 w-full">
        {loading ? <ThreeDots/> : posts.length > 0 ? <PostsList posts={posts} setQuery={setQuery} totalPages={totalPages} currentPage={currentPage - 1}/> : <h2 className="m-auto">Наразі постів не знайдено...</h2>}
  {/* {posts.length > 0 && !loading  ? <PostsList posts={posts} setQuery={setQuery} totalPages={totalPages} currentPage={currentPage - 1}/> : !loading && <h2 className="m-auto">Наразі постів не знайдено...</h2>} */}

{posts.length > 0 && <div className="flex flex-col md:w-1/5">
  {!loading && <div className="hidden md:block mb-[30px]">
          <h3 className="text-xs uppercase text-[#030303]">Категорія</h3>
         {posts.length > 0 && posts?.flatMap(item => item.category).filter((item, idx, array) => array.indexOf(item) === idx).map(item => <Category key={item} item={item}/>)}
        </div>}

        <div className="hidden md:block basis-1/5">
          <h3 className="text-xs uppercase text-[#030303]">Популярні</h3>
         {!!popularePosts && popularePosts.map(post => <PopularPost key={post._id} post={post}/>)}
        </div>
        </div>}

      </div>
    </div>
  )
}

export default MainePage
