import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
    <header className=" header__nav">
        <div className="container">
            <div className='header__content'>

                <NavLink to="/dashboard" className="header__title">
                    <h1>Expensify</h1>
                </NavLink>


                <div>
                    <NavLink to="/dashboard" className="header__title" activeClassName="is-active">Dashboard</NavLink>
                    <NavLink to="/create" className="header__title" activeClassName="is-active">Create Expense</NavLink>
                    <button onClick={startLogout} className='box-button'>Logout</button>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
