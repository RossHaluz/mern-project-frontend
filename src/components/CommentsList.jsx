import CommentItem from "./CommentItem"

const CommentsList = ({userComments}) => {
  return <><div className="mt-5">{userComments.length === 0 ? "Поки що немає коментарів" : <ul className="flex flex-col gap-5">{userComments.length === 0 ? "Поки що коментаріїв немає" : userComments?.map(item => {
    return <CommentItem key={item._id} item={item}/>
  })}</ul>}</div></>
}

export default CommentsList
