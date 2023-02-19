import React from 'react'
import '../App' 
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h1>react book app</h1>
        </div> 
        <div>
          <Link to='/favorites'>
          <h3>Add your Book List</h3></Link>
        </div>
    </div>
  )
}

export default Navbar