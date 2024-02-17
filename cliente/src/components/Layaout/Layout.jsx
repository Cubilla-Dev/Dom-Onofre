import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {
    return (
        <>
            <NavBar/>
            <div className='max-w-screen overflow-x-hidden h-full' >
                <Outlet />
                <ToastContainer />
            </div>
        </>
    )
}