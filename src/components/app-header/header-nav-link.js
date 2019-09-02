import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderNavLink extends Component{

    render() {

        const { label, linkHref, currentPage = true } = this.props;

        return (
            <Link className="nav-link" to={ linkHref }> { label } </Link>
        );
    }
}