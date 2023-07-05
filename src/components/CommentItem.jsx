import Moment from "react-moment";

const CommentItem = ({item}) => {
const {comment, createdAt} = item;

const avatar = comment.split("").splice(0, 2, 1).join("").toUpperCase();

  return (
    <li className="flex items-center gap-2 border-2 border-gray-300 p-2">
        <div className="rounded-[50%] bg-gray-500 w-[40px] h-[40px] flex justify-center items-center text-white">{avatar}</div>
        <div>
        <p className="text-[#030303] text-[18px]">{comment}</p>
        <p className="text-[12px] text-gray-600 opacity-40"><Moment format="DD MMM YYYY HH:mm" date={createdAt}/></p>
        </div>
    </li>
  )
}

export default CommentItem
