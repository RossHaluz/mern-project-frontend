import { AiOutlineClose } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/operations';

const MobileMenu = ({ setIsOpen }) => {
  const { isUserLogin } = useSelector(state => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeStylesAuth = {
    color: '#ffc107',
    borderBottom: '2px solid #ffc107',
  };

  const handlerLogout = () => {
    dispatch(logout())
    navigate('/login')
    setIsOpen(false)
  }

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full p-[40px] bg-white">
      <div className="flex justify-between">
        <Link to="/" onClick={() => setIsOpen(false)}>Logo</Link>
        <button className="text-[22px]" onClick={closeMobileMenu}>
          <AiOutlineClose />
        </button>
      </div>

      <div className="mt-[50px] flex items-center flex-col">
        {isUserLogin ? (
            <Link className="gap-2 bg-[#ffc107] py-3 px-5 border border-solid bottom-2 border-[#ffc107] text-white rounded-[50px] w-[160px] flex justify-center items-center" onClick={handlerLogout}>
            Logout
            <BiLogOut/>
          </Link>
        ) : (
          <ul className="mt flex flex-col items-center gap-5">
            <li className="bg-[#ffc107] py-3 px-5 border border-solid bottom-2 border-[#ffc107] text-white rounded-[50px] w-[160px] flex justify-center items-center">
              <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
            </li>
            <li className="py-3 px-5 border border-solid bottom-2 border-[#ffc107] text-[#ffc107] rounded-[50px] w-[160px] flex justify-center items-center">
              <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
            </li>
          </ul>
        )}
      </div>

      <div className="mt-[40px] flex justify-center">
        <ul className="flex flex-col gap-5 items-center">
          <li className="text-[27px] font-medium leading-[34px]">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? activeStylesAuth : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              Головна
            </NavLink>
          </li>
          <li className="text-[27px] font-medium leading-[34px]">
            <NavLink
              to="/save-posts"
              style={({ isActive }) =>
                isActive ? activeStylesAuth : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              Збережені пости
            </NavLink>
          </li>
          <li className="text-[27px] font-medium leading-[34px]">
            <NavLink
              to="/posts"
              style={({ isActive }) =>
                isActive ? activeStylesAuth : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              Мої пости
            </NavLink>
          </li>
          <li className="text-[27px] font-medium leading-[34px]">
            <NavLink
              to="/new"
              style={({ isActive }) =>
                isActive ? activeStylesAuth : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              Додати пост
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
