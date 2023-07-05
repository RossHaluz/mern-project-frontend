import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loyaut = () => {
  return (
   <> 
   <div className="border-b-2"> <NavBar/></div>
   <div className="container mx-auto">
   <Suspense fallback={<p>Loading...</p>}>
       <Outlet />
       <ToastContainer position="bottom-right" />
   </Suspense>
 
</div>
</>
  )
}

export default Loyaut
