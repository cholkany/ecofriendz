import React, { Fragment, useState } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

    {
        id: 6,
        title: 'Service',
        link: '/service-s2',
    },
    {
        id: 7,
            title: 'Shop',
            link: '/shop',
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
      
    },

    {
        id: 3,
        title: 'Others',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'Projects',
                link: '/project'
            },
            {
                id: 3222,
                title: 'Team',
                link: '/team'
            },
            {
                id: 334,
                title: 'Testimonial',
                link: '/testimonial'
            },
        ]
    },

    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} href={submenu.link} legacyBehavior>{submenu.title}</Link>
                                                            </ListItem>
                                                        );
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link href={item.link} legacyBehavior>{item.title}</Link>
                                }
                            </ListItem>
                        );
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
}

export default MobileMenu;