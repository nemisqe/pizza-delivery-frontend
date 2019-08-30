import React, { Component } from 'react';

export default class HeaderNavLink extends Component{

    render() {

        const { label, linkHref, currentPage = true } = this.props;

        return (
                <a className="nav-link" href={ linkHref }> { label } </a>
        );
    }
}