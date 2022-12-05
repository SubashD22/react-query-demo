import React from 'react'
import { Link } from 'react-router-dom'

function navBar() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Tsh'>Tsh</Link></li>
                <li><Link to='/Rsh'>Rsh</Link></li>
                <li><Link to='/Dh'>Dh</Link></li>
                <li><Link to='/Dep'>Dep</Link></li>
            </ul>
        </nav>
    )
}

export default navBar