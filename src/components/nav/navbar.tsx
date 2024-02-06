import React,{useState} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import './navbar.css'

const Nav:React.FC=()=>{
    const [Show,setShow]=useState<boolean>(false)

	const handleToggle=()=>{
		setShow(!Show)
	}

    return (
    <div className='fixed top-0 left-0 right-0 py-1.5 bg-dark-200/90'>

        <div className='container relative flex w-[90%] max-w-[1280px] h-[70px] md:h-[90px] mx-auto justify-between items-center'>
            <div className='flex flex-col items-center'>
                <h1 className='text-white font-bold text-2xl'>&lt;KJ /&gt;</h1>
            </div>
            <button className={`hamburger block relative w-[26px] md:w-8 h-8 md:h-9 lg:hidden rounded focus:outline-none ${Show?'open':''}`} onClick={handleToggle}>
                <span className='hamburger-top w-full h-0.5 md:h-1 bg-gray-100 rounded-sm'></span>
				<span className='hamburger-middle w-full h-0.5 md:h-1 bg-gray-100 rounded-sm'></span>
				<span className='hamburger-bottom w-full h-0.5 md:h-1 bg-gray-100 rounded-sm'></span>
            </button>
            <div className='hidden lg:flex gap-x-16 items-center'>
                <div className='hidden lg:flex'>
                    <ul className='flex gap-x-8'>
                        <li>
                            <Link to='/experience' className='text-gray-100 text-xl  font-nunito font-normal'>Experience</Link>
                        </li>
                        <li>
                            <Link to='/projects' className='text-gray-100 text-xl font-nunito font-normal'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='text-gray-100 text-xl font-nunito font-normal'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <Link to="#">
                        <button className='flex gap-x-1 items-center bg-gray-100 px-4 py-1.5 w-fit rounded-[20px] 
                        transition ease-in-out hover:scale-105 duration-300' >
                            <p className='text-bgblue text-lg font-nunito font-medium'>Download CV</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='h-[400px] relative overflow-hidden'>
        <nav className={`menu w-full max-w-[1280px] absolute z-10 bg-bgblue px-6 py-8 pt-6 md:px-8 md:py-9 lg:hidden rounded-b-xl ${Show?'open':'close'}`}>
            <ul className='flex flex-col gap-y-3 md:gap-y-3.5 tracking-wide'>
                <li>
                    <Link to='/vehicles' className='text-white text-xl md:text-2xl font-nunito font-normal'>Experience</Link>
                </li>
                <li>
                    <Link to='/#' className='text-white text-xl md:text-2xl font-nunito font-normal'>Projects</Link>
                </li>
                <li>
                    <Link to='/#' className='text-white text-xl md:text-2xl font-nunito font-normal'>Contact</Link>
                </li>
                <li>
                    <Link to="#">
                        <button className='flex items-center mt-5 bg-gray-100 px-4 py-1.5 w-fit rounded-[20px] 
                        transition ease-in-out hover:scale-105 duration-300' >
                            <p className='text-bgblue text-lg font-nunito font-medium'>Download CV</p>
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
    </div>)
}

export default Nav