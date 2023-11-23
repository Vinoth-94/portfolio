import React from 'react'
import Toggle from './Toggle'
import { Link } from 'react-scroll';


const Navbar = ({ drk, setdrk }) => {
    const toggle = () => {
        setdrk(!drk)        
    }

    
  return (
    <div className='n-wrapper'>
        
        <div className="n-left">
            <div className="n-name">
                Vinoth
            </div> 
            <Toggle drk={drk} click={toggle}  />
        </div>
        <div className="n-right" >
            <div className="n-list">
                <ul>
                    <li> <Link spy={true} to="Navbar" smooth={true} activeClass='activeClass' className='nav-link' > Home </Link></li>
                    <li> <Link spy={true} to="Service" smooth={true}  className='nav-link'> Services </Link></li>
                    <li> <Link spy={true} to="Experience" smooth={true}  className='nav-link'>Experience </Link></li>
                    <li> <Link spy={true} to="Portfolio" smooth={true}  className='nav-link'> Portfolio </Link></li>
                    <li> <Link spy={true} to="Navbar" smooth={true}  className='nav-link'> Testimonials </Link></li>
                </ul>
            </div>

            <button className='btn n-btn'> Contact</button>
        </div>


    </div>
  )
}

export default Navbar