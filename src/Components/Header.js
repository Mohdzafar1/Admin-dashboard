import React from 'react'

const Header = () => {
  return (
    <>
       <header>
        <nav className='navbar bg-primary navbar-expand-lg'>
        <div className="container">
        <a href="" className='navbar-brand text-dark'>Admin-Dashboard</a>
         <button className='navbar-toggler'type="button"data-bs-toggle="collapse"data-bs-target="#nav">
            <span className='navbar-toggler-icon bg-light' ></span>
         </button>
         <div className='collapse navbar-collapse'id="nav">
           <ul className='navbar-nav'>
           <li className='nav-item'><a href="#" className='nav-link text-light'>Overview</a></li>
           <li className='nav-item'><a href="" className='nav-link  text-light'>Reports</a></li>
           <li className='nav-item'><a href="" className='nav-link  text-light'>Analytics</a></li>
           <li className='nav-item'><a href="" className='nav-link  text-light'>Export</a></li>
           <li className='nav-item'><a href="" className='nav-link  text-light'>Snippets</a></li>
           <li className='nav-item'><a href="" className='nav-link  text-light'>Flex</a></li>
           <li className='nav-item'><a href="" className='nav-link  text-light'>layouts</a></li>
           <li className='nav-item'><a href="" className='nav-link  text-light'>Templates</a></li>
           <li className='nav-item'><a href="" className='nav-link  text-light'>Themes</a></li>
           </ul>
         </div>
        </div>
        </nav>
       </header>
    </>
  )
}

export default Header
