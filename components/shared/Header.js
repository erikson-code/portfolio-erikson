import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';



const BsNavLink = props => {


  const { href, title, className = "" } = props;
  return (
    <Link href={href}>
      <a className={`${className} nav-link port-navbar-link`}>{title}</a>
    </Link>
  )
}


const Header = ({ className }) => {

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [session] = useSession()


  const LoginOut = ({ onClick }) => {

    return (
      <a className="nav-link port-navbar-link" style={{ cursor: "pointer" }}

        onClick={() => {

          router.push("/")
            .then(() => onClick())

        }
        }>Logout</a>

    )

  }
  const LoginLink = ({ onClick }) => {
    return (
      <a className="nav-link port-navbar-link " style={{ cursor: "pointer" }} onClick={() => onClick()}>Login</a>

    )

  }

  const AdminMenu = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (

      <Dropdown
        className="port-navbar-link port-dropdown-menu"
        nav
        isOpen={isOpen}
        toggle={() => {setIsOpen(!isOpen) }}
        
      >
        <DropdownToggle className="port-dropdown-toggle" nav caret>
          Admin
        </DropdownToggle>

        <DropdownMenu right>
          <DropdownItem>
            <BsNavLink className=
              "port-dropdown-item"
              href="/portfolios/new"
              title="Create Portfolio" />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

    )
  }


  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
        dark
        expand="md">
        <div className="navbar-brand">
          <Link href="/">
            <a className="port-navbar-brand">
              {session == undefined ? "" : session.user.name

              }</a>
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret" />
            </NavItem>




          </Nav>

          {!session && <>

            <NavItem className="port-navbar-item">
              <LoginLink onClick={() => signIn("auth0")}></LoginLink>
            </NavItem>
          </>}
          {session && <>
            <AdminMenu></AdminMenu>
            <NavItem className="port-navbar-item">
              <LoginOut onClick={() => signOut()}></LoginOut>
            </NavItem>
          </>}







        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header


