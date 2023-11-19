import React, { useState } from 'react'
import './NavBar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {

    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        return (
            setIsOpened(prev => !prev)
        )
    } 

  return (
    <div className="nav">
        <p>
            <span>wet</span>
            <span>Bank</span>
        </p>
        <nav className={isOpened ? 'mobile-nav' : '' }>
            <ul>
                <li><a href="">Discover</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href="">About US</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <button>Login / Sign Up</button>
            
        </nav>
       { isOpened ? <IoMdClose size={26} className='ham' onClick={handleClick} /> :
        <RxHamburgerMenu onClick={handleClick}  className='ham' size={26} />}
    </div>
  )
}

export default NavBar