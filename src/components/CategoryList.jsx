import CategoryItem from "./CategoryItem"
import CategorySearch from "./CategorySearch";
import { useSelector } from "react-redux";

const CategoryList = ({posts}) => {
const {loading} = useSelector(state => state.post)

  return <div className="flex flex-col gap-3 justify-center mt-5 w-full">
    <CategorySearch />
    {!loading && <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{posts?.map(item => {
    return <CategoryItem key={item._id} item={item}/>
  })}</ul>}
  </div>
}

export default CategoryList
