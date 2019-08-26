import React from 'react';
import HeaderNavLink from './header-nav-link';

const HeaderNavList = () => {

    const navData = [
        { label: 'Home', linkHref: '#', currentPage: true, id: 1 },
        { label: 'Menu', linkHref: '#', currentPage: false, id: 2 },
        { label: 'Registration', linkHref: '#', currentPage: false, id: 3},
        { label: 'Login', linkHref: '#', currentPage: false, id: 4 },
        { label: 'Contacts', linkHref: '#', current: false, id: 5 }
    ];

    const elements = navData.map(x => {

        const { id, ...itemProps } = x;

        return (
            <li className="nav-item" key={ id }>
                <HeaderNavLink { ...itemProps }/>
            </li>
        );
    });

    return (
        <ul className="navbar-nav">
            { elements }
        </ul>
    );
};

export default HeaderNavList;