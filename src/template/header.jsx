import React, { useEffect, useState } from 'react';
import { image } from "../utils/image";
import Topbar from '../template/topbar';
import Menu from '../component/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [menuCollapsed, setMenuCollapsed] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const toggleMenu = () => {
        setMenuCollapsed(!menuCollapsed); // Toggle the menuCollapsed state
    }

    return (
        <section className='header'>
            <Topbar />
            <div className={`container-fluid sticky-navbar ${scroll ? "sticky-active" : "sticky"}`}>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                        <div className="container">
                            <Link className="navbar-brand col-3" to="/"><img className="brand" src={image.logo} /></Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#ftco-nav"
                                aria-controls="ftco-nav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={toggleMenu}
                            >
                                <span className="">
                                   {!menuCollapsed ?
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                                    }
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="ftco-nav">
                                <Menu />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Header;
