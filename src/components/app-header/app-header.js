import React from 'react';
import HeaderNavList from './header-nav-list';

const AppHeader = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Pizza-Delivery</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <HeaderNavList/>
            </div>
        </nav>
    );
};

export default AppHeader;