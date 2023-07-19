import FavoritePosts from "components/FavoritePosts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFavoritePosts } from "redux/post/operatins"

const SavePosts = () => {
const {favoritePosts} = useSelector(state => state.post);
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getFavoritePosts())
}, [dispatch])

  return <>{favoritePosts.length === 0 ? <h3 className="flex justify-center mt-8">Немає збережених постів</h3> : <FavoritePosts favoritePosts={favoritePosts}/>}</>
}

export default SavePosts
