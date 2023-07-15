import FavoritePostItem from "./FavoritePostItem"

const FavoritePosts = ({favoritePosts}) => {
    
  return <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
    {favoritePosts?.map(item => <FavoritePostItem key={item._id} item={item}/>)}
  </ul>
}

export default FavoritePosts
