import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from "../redux/post/operatins";
import PostsList from "../components/PostsList";
import PopularPost from "../components/PopularPost";
import Category from "components/Category";

const MainePage = () => {
const dispatch = useDispatch();
const {posts, popularePosts} = useSelector(state => state.post)

useEffect(() => {
dispatch(getAllPosts())
}, [dispatch])

const allCategory = posts.flatMap(item => item.category)

  return (
    <div className="w-full md:max-w-[950px] mx-auto py-10 flex gap-12">
      <div className="flex justify-between md:gap-8 w-full">
 {posts && <PostsList posts={posts}/>}

<div className="flex flex-col md:w-1/5">
 <div className="hidden md:block mb-[30px]">
          <h3 className="text-xs uppercase text-[#030303]">Категорія</h3>
         {allCategory.length > 0 && allCategory?.filter((item, idx, array) => array.indexOf(item) === idx).map(item => <Category key={item._id} item={item}/>)}
        </div>

        <div className="hidden md:block basis-1/5">
          <h3 className="text-xs uppercase text-[#030303]">Популярні</h3>
         {!!popularePosts && popularePosts.map(post => <PopularPost key={post._id} post={post}/>)}
        </div>
        </div>

      </div>
    </div>
  )
}

export default MainePage
