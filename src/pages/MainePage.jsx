import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from "../redux/post/operatins";
import PostsList from "../components/PostsList";
import PopularPost from "../components/PopularPost";

const MainePage = () => {
const dispatch = useDispatch();
const {posts, popularePosts} = useSelector(state => state.post)
useEffect(() => {
dispatch(getAllPosts())
}, [dispatch])

  return (
    <div className="max-w-[950px] mx-auto py-10 flex gap-12">
      <div className="flex justify-between gap-8 w-full">
 {posts && <PostsList posts={posts}/>}
        <div className="hidden md:block basis-1/5">
          <h3 className="text-xs uppercase text-[#030303]">Популярні</h3>
         {!!popularePosts && popularePosts.map(post => <PopularPost key={post._id} post={post}/>)}
        </div>
      </div>
    </div>
  )
}

export default MainePage
