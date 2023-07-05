import PostItem from "./PostItem"

const PostsList = ({posts}) => {
  return <ul className="flex flex-col gap-10 basis-4/5">
    {posts?.map(item => item && <PostItem key={item._id} item={item}/>
    )}
  </ul>
}

export default PostsList
