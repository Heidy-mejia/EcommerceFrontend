import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { AuthContext } from '../context/AuthContext';

export const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                <Link to={`/`}>Home     </Link>
                </li>
                <li>
                <Link to={`/camisas`}>Camisas</Link>
                </li>
                <li>
                <Link to={`/zapatos`}>Zapatos</Link>
                </li>
                <li>
                <Link to={`/vestidos`}>Vestidos</Link>
                </li>
                <li>
                <Link to={`/pantalones`}>Pantalones</Link>
                </li>
                <li>
                <Link to={`/faldas`}>Faldas</Link>
                </li>

            </ul>
           
        </nav>
    </header>
  )
}
