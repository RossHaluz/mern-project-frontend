import UserPostsItem from "./UserPostsItem"

const UserPosts = ({posts}) => {
  return <ul className="flex flex-col gap-4 py-5">
  {posts?.map(post => {
    if(post){
      return <UserPostsItem key={post._id} post={post}/>
    }
  })}
</ul>
}


export default UserPosts