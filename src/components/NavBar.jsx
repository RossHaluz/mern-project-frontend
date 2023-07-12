import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logout } from '../redux/auth/operations';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { removeStatus } from '../redux/auth/slice';
import { FiMenu } from 'react-icons/fi';

const NavBar = ({setIsOpen}) => {
const {isUserLogin, isLoading, status} = useSelector(state => state.auth);
const dispatch = useDispatch()


const openMobileMenu = () => {
  setIsOpen(true)
}

const activeStyles = {
    color: 'orange'
}

const activeStylesAuth = {
    color: 'white',
    backgroundColor: 'orange',
    padding: '5px 15px',
    borderRadius: "10px"
}

useEffect(() => {
if(status){
  toast(status)
  setTimeout(() => {
    dispatch(removeStatus())
   }, 5000)
}
}, [status, dispatch])

const logoutHandler = () => {
  dispatch(logout())
}

  return (
    <div className='container  m-auto flex justify-between item-center py-4 bordr border-b-black' >
      <NavLink to='/' className="flex justify-center items-center text-gray-600 text-lg pointer cursor-pointer">
        Blog for IT
      </NavLink>

      <ul className="hidden md:flex gap-8 items-center">
        <li>
            <NavLink to="/" className='text-sm text-gray-600 hover:text-orange-800' style={({isActive}) => isActive ? activeStyles : undefined}>Головна</NavLink>
        </li>
        <li>
            <NavLink to="/save-posts" className='text-sm text-gray-600 hover:text-orange-800' style={({isActive}) => isActive ? activeStyles : undefined}>Збережені пости</NavLink>
        </li>
        <li>
        <NavLink to="/posts" className='text-sm text-gray-600 hover:text-orange-800' style={({isActive}) => isActive ? activeStyles : undefined}>Мої пости</NavLink>
        </li>
        <li>
        <NavLink to="/new" className='text-sm text-gray-600 hover:text-orange-800' style={({isActive}) => isActive ? activeStyles : undefined}>Додати пост</NavLink>
        </li>
      </ul>


<button className='text-[22px] md:hidden' onClick={openMobileMenu}>
  <FiMenu/>
</button>

      {!isLoading && <>
      {isUserLogin ? <div className="hidden md:flex gap-8 justify-center items-center px-4 py-2 text-sm bg-gray-600 text-white rounded-xl hover:bg-gray-800">
        <button type='button' onClick={logoutHandler}>Log out</button>
      </div> :   <div className='hidden md:flex  gap-4 items-center'>
    <NavLink to='/login' style={({isActive}) => isActive ? activeStylesAuth : undefined }>Log in</NavLink>
      <NavLink to='/register' style={({isActive}) => isActive ? activeStylesAuth : undefined }>Sign in</NavLink>
    </div> }
    </>}
    </div>
  )
}

export default NavBar
