import { useParams } from "react-router-dom"
import PostPageDetails from "../components/PostPageDetails"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPost } from "../redux/post/operatins"

const PostPage = () => {
const {id} = useParams()
const dispatch = useDispatch()
const {post} = useSelector(state => state.post)

useEffect(() => {
dispatch(getPost(id))
}, [id, dispatch])

  return <>{!!post && <PostPageDetails post={post} id={id}/>}</>
}

export default PostPage
