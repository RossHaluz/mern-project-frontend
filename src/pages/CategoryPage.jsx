import CategoryList from "components/CategoryList"
import CategorySearch from "components/CategorySearch";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCategoryPosts } from "redux/post/operatins";

const CategoryPage = () => {
const dispatch = useDispatch();
const {category} = useParams();
const {posts, favoritePosts} = useSelector(state => state.post);

useEffect(() => {
dispatch(getCategoryPosts(category))
}, [dispatch, category, favoritePosts])

  return <>
   <CategorySearch />
  {posts.length > 0 && <CategoryList posts={posts}/>}
  </>
}

export default CategoryPage
