import React, { Component } from 'react';
import HeaderNavLink from './header-nav-link';

export default class HeaderNavList extends Component {

    state = {
        navData: [
            { label: 'Home', linkHref: '/', currentPage: true, id: 1 },
            { label: 'Menu', linkHref: '/menu', currentPage: false, id: 2 },
            { label: 'Registration', linkHref: '#', currentPage: false, id: 3},
            { label: 'Login', linkHref: '/login', currentPage: false, id: 4 },
            { label: 'Contacts', linkHref: '#', current: false, id: 5 }]
    };

   render() {
       const elements = this.state.navData.map(x => {

           const { label } = this.state;
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
};