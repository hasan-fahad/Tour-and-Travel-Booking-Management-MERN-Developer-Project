
import { Button, Container,  Row } from 'reactstrap';
import logo from '../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom';

 import './Header.css'
import { FaBars } from "react-icons/fa";
import { useEffect, useRef } from 'react';

const nav__links=[
    {
        path:"/",
        display: 'Home'
    },
    {
        path:"/about",
        display: 'About'
    },
    {
        path:"/tours",
        display: 'Tours'
    },
    
];


const Header = () => {

    const headerRef = useRef(null);

    const stickyHeaderFunc=()=>{
        window.addEventListener("scroll", ()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add("sticky__header");
            } 
            else{
                headerRef.current.classList.remove("sticky__header");
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc();
        return window.removeEventListener("scroll",stickyHeaderFunc);
    })
    return <header className="sticky__header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    {/* Menu Start */}
                    
                    <div className="navigation">
                        <ul className="menu d-flex align-items-center gap-5">
                            
                               
                                   {
                                    nav__links.map((item, index)=> (
                                        <li className="nav__item" key={index}>
                                            <NavLink 
                                            to={item.path}
                                            className={navClass => navClass.isActive?"active__link" :""
                                        }
                                            
                                            >{item.display}</NavLink>
                                        </li>
                                    ))
                                   }
                            
                        </ul>

                    </div>
                        {/* Menu End */}

                     <div className="nav__right d-flex align-items-center gap-5">
                        <div className="nav__btns d-flex align-items-center gap-5">
                            <Button className='btn secondary__btn'>
                                <Link to='/login'>Login</Link>
                            </Button>
                            <Button className='btn primary__btn'>
                                <Link to='/register'>Register</Link>
                            </Button>
                            <span className="mobile__menu">
                            
                            <FaBars></FaBars>
                        </span>
                        </div>
                       
                     </div>
                     
                    </div>
               </Row>
            </Container>
        </header>
        
};

export default Header;