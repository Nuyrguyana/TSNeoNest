import React from 'react';
import { Link } from "react-router-dom";
import heart from '../../../icon/Vector.svg'
import basket from '../../../icon/Vector2.svg'

interface HeaderProps {
    itemCount: number
}

export const Header = ({ itemCount }: HeaderProps) => {

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-inner'>
                    <Link className='brand' to='/' title='main'>Qpick</Link>
                    <nav className='header-nav'>
                        <Link className='header-nav-link' to='/' title='favorites'>
                            <img className='nav-icon' src={heart}/>
                        </Link>
                        <Link className='header-nav-link' to='/basket' title='basket'>
                            <img className='nav-icon' src={basket}/>
                            <span className='icon-button__badge'>{itemCount}</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

