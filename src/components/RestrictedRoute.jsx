import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const RestrictedRoute = ({component: Compomemt, redirectTo = '/'}) => {
const {isUserLogin} = useSelector(state => state.auth);

return isUserLogin ? <Navigate to={redirectTo}/> : Compomemt
}

export default RestrictedRoute;