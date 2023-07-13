import { Link } from "react-router-dom"
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { removeFromFavorite } from "redux/post/operatins";
import { toast } from "react-toastify";

const FavoritePostItem = ({item}) => {
  const dispatch = useDispatch()
  const {
    title,
    text,
    imgUrl,
    username,
    createdAt,
    views,
    comments,
    _id: id,
  } = item;

  const removePostFromFavorite = id => {
    dispatch(removeFromFavorite(id))
    toast.error("Пост видалений із збережених")
  }

  return  <li className="flex flex-col basis-1/4 gap-5 flex-grow border-solid border-2 p-3 rounded-lg relative">
    <Link to={`/${id}`}>
    {imgUrl && (
          <div className="p-2 rounded-lg flex h-[11rem] mb:h-80">
            <img
              src={`https://blog-t4w3.onrender.com/${imgUrl}`}
              alt={imgUrl.name}
              className="object-contain rounded-2xl md:object-cover w-full"
            />
          </div>
        )}
         <div className="flex justify-between items-center mt-5">
          <span className="text-xs text-[#030303] opacity-50">
            автор: {username}
          </span>
         <span className="text-xs text-[#030303] opacity-50">
            <Moment date={createdAt} format="D MMM YYYY" />
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h2 className="text-lg text-[#030303]">{title}</h2>
          <p className="text-xs text-[#030303] opacity-60 line-clamp-4">
            {text}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 text-sm text-[#030303] opacity-50"
          >
            <AiFillEye /> <span>{views}</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 text-sm text-[#030303] opacity-50"
          >
            <AiOutlineMessage /> <span>{comments?.length || 0}</span>
          </button>
          </div>
        </div>
    </Link>

    <button className="text-xs text-white bg-red-600 py-2 px-4 rounded-lg absolute bottom-5 right-5" onClick={() => removePostFromFavorite(id)}>Видалити із збережених</button>
  </li>
}

export default FavoritePostItem
