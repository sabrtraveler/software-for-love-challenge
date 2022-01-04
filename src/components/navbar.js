import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/page-2">Page 2</Link>
            <Link to="/using-ssr">Using SSR</Link>
            <Link to="/using-typescript">Using TypeScript</Link>
            <Link to="/using-dsg">Using DSG</Link>
        </div>
        </nav>
    )
}