import React from 'react';
import {Link} from 'react-router-dom'

const MenuComponent = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <a className="navbar-brand" href="#">mStockApp</a>
            <button className="navbar-toggler" data-toggle="collapse"
                data-target="#navcontent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcontent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/company-list">Companies</Link>
                    </li>
                    {props.isLoggedIn ? <li className="nav-item">
                        <Link className="nav-link" to ="/watchlist">WatchList</Link>
                    </li> : null}
                    {props.isLoggedIn ? <li className="nav-item">
                        <Link className="nav-link"  to="/performance">Compare Performance</Link>
                    </li> : null}
                    {!props.isLoggedIn ? <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li> : null}
                    {props.isLoggedIn ? <li className="nav-item">
                        <Link className="nav-link" onClick={props.logout}>Logout</Link>
                    </li> : null}
                </ul>
            </div>
        </nav>
    )
}
export default MenuComponent;