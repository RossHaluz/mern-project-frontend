import UserPostsItem from "./UserPostsItem"

const UserPosts = ({posts}) => {
  return <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
  {posts?.map(post => post && <UserPostsItem key={post._id} post={post}/> )}
</ul>
}


export default UserPosts
