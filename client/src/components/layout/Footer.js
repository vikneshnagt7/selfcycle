import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LOGOUT } from '../../actions/types';
import logo from '../../img/logo.png';

const Footer = prop => {

    return(
        <div>
            <div className = "footer">
                <div className="inner_footer">
                    <div className="logo_container">
                        <img src={ require('../../img/logo.png')}/>
                    </div>
                    <div className="footer_cells">
                        <h1> About Us</h1>
                        <span>
                            Team Omega, is a group <br/>
                            consists of four Computer<br/>
                            Science Students from <br/>
                            UOW in INTI International<br/>
                            College Subang Jaya<br/>
                         </span>
                    </div>

                    <div className="footer_cells"> 
                        <h1>	Need Help?	</h1>
                        <Link to='/contactus'>Contact Us</Link>
                        <Link to="/faq">FAQ</Link>
                    </div>

                    <div className="footer_cells"> 
                        <h1>	Self Cycle  </h1>
                        <span> Designed by Team Omega  </span>
                    </div>

                </div>
            </div>

        </div>
    );
};


Footer.propTypes ={
    
};


export default Footer;