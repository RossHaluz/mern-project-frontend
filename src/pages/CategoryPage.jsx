import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getCategoryPosts } from "redux/post/operatins"

const CategoryPage = () => {
const dispatch = useDispatch();
const {category} = useParams();

useEffect(() => {
dispatch(getCategoryPosts(category))
}, [dispatch, category])

  return (
    <div>
      
    </div>
  )
}

export default CategoryPage
