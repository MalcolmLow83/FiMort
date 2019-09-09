import React from 'react';
import styles from './style.scss';

class Nav extends React.Component {
    
    render(){
        return(
            <div className="col-12">
                <h6>Nav</h6>
                <nav>
                <ul className="nav-links">
                    <li>home</li>
                    <li>form</li>
                </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;