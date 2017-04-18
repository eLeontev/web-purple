import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { media } from '../utils/css-utils';

import ArrowButton from '../components/arrow-button/arrow-button.jsx';
import WebpurpleLogo from '../components/webpurple-logo/webpurple-logo';


import { MenuIcon, CloseIcon } from '../components/icons/header';

const Wrapper = styled.header`
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    padding: 2.6em 2em;
    width: 100%;
    ${media.tablet`
        flex-direction: row;
        width: auto;
        padding: 0;
        margin: 3em 0;
    `};
`;

const MenuHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    ${media.tablet`
        width: auto;
        align-items:auto;
    `};

`;

const MenuButton = styled(MenuIcon)`
    display: flex;
    margin: 0em 1em;
    ${media.tablet`display: none;`};
`;

const CloseButton = styled(CloseIcon)`
    display: flex;
    margin: 0em 1em;
    ${media.tablet`display: none;`};
`;

const MenuBar = styled.div`
    display: flex;
    flex-grow: 2;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 0;
    ${media.tablet`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding: 0;
    `};
`;

const NavigationBar = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    ${media.tablet`
        margin: 0;
        flex-grow: 2;
        align-items: center;
        flex-direction: row;
        width: auto;
        padding: 0 0 0 4em;
    `};
`;

// ToDo: animations

const MenuItem = styled.li`
    list-style: none;
    display: inline-flex;
    box-sizing: border-box;
    padding: 1.3em 0 1em 0;
    margin: 0 2.5em 2em 4em;
    &:hover {
        border-bottom-color: ${props => props.theme.lipstick};
    }
    ${media.tablet`
        margin: 0 2.5em 0 0;
        transition: border-color 1s ease-out;
        border-bottom: solid 0.3em transparent;
    `};
`;

const NavigationLink = styled(NavLink)`
    text-decoration: none;
    text-transform: uppercase;
    font-family: Rubik, sans-serif;
    font-size: 2.3em;
    font-weight: 500;
    color: ${props => props.theme.warmGrey};
    ${media.tablet`
        font-size: 1.6em;
    `};
`;

const ArrowButtonStyled = styled(ArrowButton)`
    margin: 0 0 0 2em;
    
    ${media.tablet`
        margin: auto;
    `};
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: true };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }

    render() {
        const height = this.state.showMenu ? '100vh' : 'auto';

        return (
            <Wrapper style={{ height }}>
                <MenuHeader>
                    <WebpurpleLogo />
                    {this.state.showMenu ? <CloseButton onClick={this.toggleMenu} /> :
                    <MenuButton onClick={this.toggleMenu} /> }
                </MenuHeader>
                {this.state.showMenu &&
                    <MenuBar>
                        <NavigationBar>
                            <MenuItem><NavigationLink to="/home">home</NavigationLink></MenuItem>
                            <MenuItem><NavigationLink to="/events">events</NavigationLink></MenuItem>
                            <MenuItem><NavigationLink to="/speakers">speakers</NavigationLink></MenuItem>
                            <MenuItem><NavigationLink to="/feed">feed</NavigationLink></MenuItem>
                        </NavigationBar>
                        <ArrowButtonStyled>sign in</ArrowButtonStyled>
                    </MenuBar>
                }
            </Wrapper>
        );
    }
}

export default Header;
