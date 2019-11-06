import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>React Avanzado</h1>
            <nav>
                <NavLink to="/">home</NavLink>
                <NavLink to="/usuarios">usuarios</NavLink>
                <NavLink to="/tickets">tickets</NavLink>
            </nav>
        </header>
    )
}

export default Header
