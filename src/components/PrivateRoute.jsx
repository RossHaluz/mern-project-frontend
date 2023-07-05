import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
const {isUserLogin} = useSelector(state => state.auth);
const {isRefreshing} = useSelector(state => state.auth);

const shouldRedirect = !isUserLogin && !isRefreshing

  return shouldRedirect ? <Navigate to={redirectTo}/> : Component
}

export default PrivateRoute
