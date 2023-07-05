import { Route, Routes } from "react-router-dom";
import Loyaut from "./components/Loyaut";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/auth/operations";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

const MainePage = lazy(() => import('../src/pages/MainePage'));
const PostsPage = lazy(() => import('../src/pages/PostsPage'));
const PostPage = lazy(() => import('../src/pages/PostPage'));
const EdditPostPage = lazy(() => import('../src/pages/EdditPostPage'));
const LoginPage = lazy(() => import('../src/pages/LoginPage'));
const RegisterPage = lazy(() => import('../src/pages/RegisterPage'));
const AddPostPage = lazy(() => import('../src/pages/AddPostPage'));
const SavePosts = lazy(() => import('../src/pages/SavePosts'))


function App() {
const dispatch = useDispatch();

useEffect(() => {
dispatch(getCurrentUser())
}, [dispatch])

  return <Routes>
  <Route path="/" element={<Loyaut/>}>
    <Route index element={<MainePage/>}/>
    <Route path="posts" element={<PrivateRoute component={<PostsPage/>} redirectTo="/login"/>}/>
    <Route path=":id" element={<PostPage/>}/>
    <Route path=":id/eddit" element={<PrivateRoute component={<EdditPostPage/>} redirectTo="/login"/>}/>
    <Route path="login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/"/>}/>
    <Route path="register" element={<RestrictedRoute component={<RegisterPage/>} redirectTo="/"/>}/>
    <Route path="new" element={<PrivateRoute component={<AddPostPage/>} redirectTo="/login"/>}/>
    <Route path="save-posts" element={<SavePosts/>}/>
  </Route>
</Routes>
}

export default App;
