import React from 'react'
import './header.css'
const Header: React.FC = () => {
  const headerLinks = ['Home', 'About', "Testimonial", 'Service', 'Contact', 'Blogs']
  return (
    <header>
    	<div className='header__child logo'>
    		logo
    	</div>

    	<ul  className='header__child'> 
    		{
    			headerLinks.map(link => {
    				return <li key={link}>
    					<a href='#'>{link}</a>
    				</li>
    			})
    		}
    	</ul>
    	<button className='header__button clicked'>
    		<div className='first'></div>
    		<div className='second'></div>
    		<div className='third'></div>
    	</button>
    </header>
  )
}

export default Header