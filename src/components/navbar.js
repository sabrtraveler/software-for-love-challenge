import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
        <div className="links">
            <Link style={{color: 'royalblue'}} to="/">Home</Link>
            <Link style={{color: 'royalblue'}} to="/page-2">Page 2</Link>
            <Link style={{color: 'royalblue'}} to="/using-typescript">Using TypeScript</Link>
        </div>
        </nav>
    )
}