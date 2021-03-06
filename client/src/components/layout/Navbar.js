import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";

const Navbar = ({ auth: {isAuthenticated, loading, user }, logout }) => {
    const authLinks = (
        <ul>
            {user ? user.userLevel === 3 && (<li><Link to="/profiles">
                Customers
                <span className="hide-sm"></span>
                </Link>
            </li>): null}

            {user ? user.userLevel === 3 && (<li><Link to="/viewposts">
            <i className="fas fa-eye"></i>{' '}View Complaints
               <span className="hide-sm"></span>
                </Link>
            </li>): null}
            
            {user ? user.userLevel !== 3 && (<li><Link to="/posts">
            <i className="fas fa-exclamation-triangle"></i>{' '}Report A Problem
               <span className="hide-sm"></span>
                </Link>
            </li>): null}

            <li><Link to="/dashboard">
                <i className="fas fa-user"></i>{' '} Me 
                <span className="hide-sm"></span>
                </Link>
            </li>
            
            <li><a onClick={logout} href='#!'>
                <i className="fas fa-sign-out-alt"></i>{' '} Logout 
                <span className="hide-sm"></span></a>
            </li>

        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    );
    
    return(
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/">Self Cycle</Link>
            </h1>
            
            { !loading && (<Fragment>{isAuthenticated? authLinks : guestLinks }</Fragment>)}
         </nav>
    )
};

Navbar.propTypes={
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Navbar);