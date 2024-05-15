import React from 'react'
import { IoMdSearch } from "react-icons/io";
const Header = () => {
    return (
        <div className='header-container'>
            <div className="nav-item">
                <div>
                    <h3>
                        Dashboard
                    </h3>
                </div>
                <div className='search-container'>
                    <div className='search-icon'>
                        <IoMdSearch  color='#5D5FEF' size={20}/>
                    </div>
                    <div className='search-bar w-100'>
                        <input type="text" placeholder='Search here...' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header