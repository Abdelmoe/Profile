import React from 'react';
import './Navbar.scss';
import {images} from '../../constants';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const[toggle, setToggle] = useState(false);
return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            {/* <img src={images.logo1} alt="" /> */}
            <h1>Moon</h1>
        </div>
        <ul className='app__navbar-links'>
            {['home' , 'about', 'work' , 'skills' , 'testimonial' ,  'contact'].map((item)=> { 
                return(
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div></div>
                    <a href={`#${item}`}>{item}</a>
                </li>
            )})}
        </ul> 
        <div  className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
                <motion.div
                whileInView={{x: [300, 0]}}
                transition ={{duration:0.85, ease:'easeInOut'}}
                >
                    <HiX  onClick={() => setToggle(false)} />
                    <ul >
                        {['home' , 'about', 'work' , 'skills' , 'testimonial' ,  'contact'].map((item)=> { 
                            return(
                            <li  key={item}>
                                <a  onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                            </li>
                        )})}
                    </ul> 

                </motion.div>
            )}
        </div>

    </nav>
)
}

export default Navbar