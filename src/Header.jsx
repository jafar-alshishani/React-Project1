import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Company name</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="Features">Features</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="Enterprise">Enterprise</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="Support">Support</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/">Pricing</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header