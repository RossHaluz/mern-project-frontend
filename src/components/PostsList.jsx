import PostItem from "./PostItem"

const PostsList = ({posts}) => {
  return <ul className="w-full flex flex-col gap-10 md:basis-4/5">
    {posts?.map(item => item && <PostItem key={item._id} item={item}/>
    )}
  </ul>
}

export default PostsList
