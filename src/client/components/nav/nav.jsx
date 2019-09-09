import React from 'react';
import styles from './style.scss';

class Nav extends React.Component {
    
    render(){
        return(
            <div className="col-12">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <a className="navbar-brand" href="/">FiMort</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/form">Disclaimer</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Nav;