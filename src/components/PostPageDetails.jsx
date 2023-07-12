import {AiFillEye, AiOutlineMessage, AiTwotoneEdit, AiTwotoneDelete} from 'react-icons/ai'
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import { delateUserPost } from '../redux/post/operatins'
import { toast } from 'react-toastify'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createNewComment, getAllComments } from '../redux/comment/operations'
import { useEffect, useState } from 'react'
import CommentsList from './CommentsList'

const PostPageDetails = ({post, id}) => {
  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.post)
  const {user} = useSelector(state => state.auth);
  const {comments: userComments} = useSelector(state => state.comment);
  const navigate = useNavigate();
  const [comment, setComment] = useState('')
  const {id: postId} = useParams()

  useEffect(() => {
    dispatch(getAllComments(postId))
  }, [dispatch, postId])

  const removePost = () => {
    dispatch(delateUserPost(id))
    toast.success('Пост успішно видалений')
    navigate('/')

  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewComment({id, comment}))
    setComment('')
  }

  const {title, text, imgUrl, username, createdAt, views, comments} = post
  return <div className='flex flex-col gap-5 py-3'>{!loading && <div className='mt-4'>
  {imgUrl && <div className='flex h-80'>
    <img src={`https://blog-t4w3.onrender.com/${imgUrl}`} alt={imgUrl.name} className='rounded-2xl object-cover w-full'/>
  </div>}
  <div className='flex justify-between items-center mt-5'>
    <span className='text-xs text-[#030303] opacity-50'>автор: {username}</span>
    <span className='text-xs text-[#030303] opacity-50'><Moment date={createdAt} format='D MMM YYYY'/></span>
  </div>
<div className='mt-4'>
<h2 className='text-lg text-[#030303]'>{title}</h2>
  <p className='text-xs text-[#030303] opacity-60 pt-1'>{text}</p>
</div>
  <div className='flex gap-3 mt-2 items-center justify-between'>
    <div className='flex gap-3 mt-4'>
    <button type='button' className='flex items-center justify-center gap-2 text-sm text-[#030303] opacity-50'>
      <AiFillEye/> <span>{views}</span>
    </button>
    <button type='button' className='flex items-center justify-center gap-2 text-sm text-[#030303] opacity-50'>
      <AiOutlineMessage/> <span>{comments?.length || 0}</span>
    </button>
    </div>

   {user?._id === post?.author && <div className='flex gap-3'>
    <Link to={`/${id}/eddit`} className='flex items-center justify-center gap-2 text-lg text-[#030303] opacity-50'>
      <AiTwotoneEdit/>
    </Link>
    <button type='button' onClick={removePost} className='flex items-center  text-lg justify-center gap-2 text-[#030303] opacity-50'>
      <AiTwotoneDelete/>
    </button>
    </div>}

  </div>
</div>}
<div className='w-full md:w-[450px] mt-3 flex flex-col gap-3'>
  <h2 className='text-lg text-[#030303] opacity-80 '>Залишити коментарії</h2>
  <form onSubmit={handleCommentSubmit}>
    <textarea type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder='Напишіть коментаррії' className='border-2 border-solid border-[#030303] text-xs text-[#030303] w-full p-3 resize-none outline-none '/>
    <div className='flex flex-row gap-3 mt-2'>
    <button type='submit' className='text-xs bg-gray-800 text-white py-3 px-4 rounded-lg'>Відправити</button>
    <button type='click' className='text-xs bg-red-600 text-white py-3 px-4 rounded-lg'>Скасувати</button>
    </div>
  </form>
  <CommentsList userComments={userComments} />
  </div>
</div>
  
}

export default PostPageDetails