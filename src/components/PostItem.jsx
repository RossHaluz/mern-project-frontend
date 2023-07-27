import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromFavorite, setFavoritePost } from "../redux/post/operatins";
import { toast } from "react-toastify";
import { useState } from "react";

const PostItem = ({ item }) => {
  const dispatch = useDispatch();
  const {
    title,
    text,
    imgUrl,
    username,
    favorites,
    createdAt,
    views,
    comments,
    _id: id,
  } = item;
  const {user, isUserLogin} = useSelector(state => state.auth);
  const [isFavorite, setIsFavorite] = useState(favorites?.includes(user?._id));
  const navigate = useNavigate();

  const addFavoritePost = id => {
    if(!isUserLogin){
      toast.error("Щоб додати пост, ви маєте зайти у свій кабінет")
      navigate('/login')
      return;
    }

    dispatch(() => setFavoritePost(id))
    setIsFavorite(true)
    toast.success('Пост доданий у збережені')
  }

  const removeFavoritePost =  id => {
    dispatch(() => removeFromFavorite(id))
    setIsFavorite(false)
    toast.error('Пост видалений із збережених')
  }

  return (
    <li className="flex flex-col basis-1/4 gap-5 flex-grow border-solid border-2 p-3 rounded-lg relative">
      <Link to={`/${id}`}>
        {imgUrl && (
          <div className="p-2 rounded-lg flex h-[13rem] md:h-[22rem]">
            <img
              src={imgUrl}
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
      {isFavorite ?  <button className="absolute bottom-5 right-5 text-lg" onClick={() => removeFavoritePost(id)}>
          <BsFillBookmarkFill/>
          </button> :  <button className="absolute bottom-5 right-5 text-lg" onClick={() => addFavoritePost(id)}>
          <BsBookmark/>
          </button>}
    </li>
  );
};

export default PostItem;
