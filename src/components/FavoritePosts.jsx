import FavoritePostItem from "./FavoritePostItem"

const FavoritePosts = ({favoritePosts}) => {
    
  return <ul className="flex flex-col gap-10 basis-4/5 mt-5">
    {favoritePosts?.map(item => <FavoritePostItem key={item._id} item={item}/>)}
  </ul>
}

export default FavoritePosts
