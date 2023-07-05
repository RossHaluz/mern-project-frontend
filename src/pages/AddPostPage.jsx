import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/post/operatins";
import { useNavigate } from "react-router-dom";

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("text", text);
    data.append("image", image);
    dispatch(createPost(data));
    navigate("/posts");
    clearFormHandler();
  };

  const clearFormHandler = () => {
    setText("");
    setTitle("");
    setImage("");
  };

  return (
    <form
      className="w-1/2 mx-auto py-10 flex flex-col gap-4"
      onSubmit={handleFormSubmit}
    >
      <label className="text-gray-300 bg-gray-600 text-sm flex justify-center items-center border-2 border-dotted cursor-pointer py-4">
        Прикріпити зображення
        <input
          type="file"
          className="hidden"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      {image && (
        <div className="flex object-cover py-2">
          <img src={URL.createObjectURL(image)} alt="Post img" />
        </div>
      )}
      <label className="text-lg text-[#030303] opacity-70">
        Заголовок
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
          className="mt-2 text-white outline-none bg-gray-600 text-sm placeholder:text-gray-400 w-full rounded-lg py-4 px-2"
        />
      </label>

      <label className="text-lg text-[#030303] opacity-70">
        Текст поста
        <textarea
          placeholder="Текст поста"
          required
          minLength={80}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-2 text-white outline-none bg-gray-600 text-sm placeholder:text-gray-400 w-full resize-none h-40 rounded-lg py-4 px-2"
        />
      </label>

      <div className="flex justify-center gap-8 items-center">
        <button
          type="submit"
          className="bg-gray-600 text-white py-3 px-4 flex justify-center items-center text-sm rounded-lg"
        >
          Додати
        </button>
        <button
          type="button"
          onClick={clearFormHandler}
          className="bg-red-600 text-white py-3 px-4 flex justify-center items-center text-sm rounded-lg"
        >
          Скасувати
        </button>
      </div>
    </form>
  );
};

export default AddPostPage;
