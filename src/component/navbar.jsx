import {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context';


const Navbar = () => {
    const {searchParam, setSearchParam,handlesubmit} = useContext(GlobalContext)
    console.log(searchParam)
    return (
        <nav className='flex justify-between sm:flex-col md:flex-col mb-2 w-full p-5 items-center mx-auto lg:flex-row bg-yellow-50 '>
            <h2 className='text-2xl text-zinc-800 font-mono'>
                <NavLink to={'/'} className='hover:text-zinc-900 duration-300'>
                    Food Recipe </NavLink></h2>
            <form onSubmit={handlesubmit}>
                <input type="text"
                    placeholder='Enter Recipe'
                    name='search'
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                    className='mx-auto flex w-200 items-center gap-x-4 rounded-xl bg-white p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10' />
            </form>
            <ul className='flex items-center gap-x-4'>
                <li className='font-mono text-lg hover:text-yellow-700 p-2 m-2 cursor-pointer'><NavLink to={"/"} >Home</NavLink></li>
                <li className='font-mono  text-lg  hover:text-yellow-700 p-2 m-2 ml-5 cursor-pointer'><NavLink to={"/favorites"}>Favorite</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;