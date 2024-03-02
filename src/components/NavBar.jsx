import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import axios from 'axios';
import Logo from './Logo';

export default function NavBar() {
    

    return (
        <div>
            <nav>
                <div className='contentDiv'>
                    <Link to='Logo'><img className="logoImg"src="/assets/BIG BITE.jpg" alt="" /></Link>
                    <Link to='/Home'>Menu</Link>
                    <Link to='/AddRecipe'>Add Recipe</Link>
                    <Link to='/Bookmarks'>Bookmarks</Link>
                </div>
            </nav>
        </div>
    )
}
