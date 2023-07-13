import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updatePost } from "../redux/post/operatins";
import { toast } from "react-toastify";

const EdditPostPage = () => {
const {id} = useParams();
const {posts} = useSelector(state => state.post);
const findPost = posts.find(post => post._id === id);
const [title, setTitle] = useState(findPost.title)
const [text, setText] = useState(findPost.text)
const [currentImg] = useState(findPost.imgUrl)
const [image, setImage] = useState("")
const dispatch = useDispatch();
const navigate = useNavigate();

const handleFormSubmit = (e) => {
e.preventDefault();
const postData = new FormData();
postData.append("title", title);
postData.append("text", text);
postData.append("image", image);
dispatch(updatePost({id, postData}))
toast.success('Пост успішно змінено')
navigate('/posts')
}

const handleCansel = () => {
  navigate('/posts')
}

  return <div className="flex mt-10 m-auto w-full md:w-[650px]">
    <form className="flex flex-col gap-3 w-full" onSubmit={handleFormSubmit}>
      {!!currentImg && !image ? <img src={`https://blog-t4w3.onrender.com/${currentImg}`} alt="Post img" /> : <img src={URL.createObjectURL(image)} alt="Post img" />}
    <label className="text-gray-300 bg-gray-600 text-sm flex justify-center items-center border-2 border-dotted cursor-pointer py-4">
        Змінити зображення
        <input
          type="file"
          className="hidden"
          onChange={(e) => setImage(e.target.files[0])}
        />
        </label>
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="border-2 border-solid py-4 px-2 text-sm texs-[#030303] outline-none" />
    <textarea type="text" value={text} onChange={e => setText(e.target.value)} className="border-2 border-solid py-4 px-2 text-sm texs-[#030303] resize-none min-h-min outline-none" />
    <div className="flex gap-3 items-center">
    <button type="submit" className="bg-[#00684a] py-3 px-6 text-sm text-white rounded-lg">Save</button>
    <button type="button" onClick={handleCansel} className="bg-red-700 py-3 px-6 text-sm text-white rounded-lg">Cansel</button>
    </div>
  </form>
  </div>
}

export default EdditPostPage
