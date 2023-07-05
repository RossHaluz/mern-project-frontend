import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserPosts } from "../redux/post/operatins"
import UserPosts from "../components/UserPosts"

const PostsPage = () => {
  const dispatch = useDispatch()
  const {posts} = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getUserPosts())
  }, [dispatch])

  return <>{posts.length === 0 ? <h2>Ви ще не добавили пост</h2> : <UserPosts posts={posts}/>}</>
}

export default PostsPage
