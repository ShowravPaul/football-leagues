import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <nav>
                    <a href='/home'>Home</a>
                    <a href='/#'>Teams</a>
                    <a href='/#'>Management</a>
                    <a href='/#'>About</a>
                    <a href='/#'>Sponsors</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;