import React, { useEffect } from 'react';
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  function displayMenu() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('active');
  };

  useEffect(() => {
    let nav = document.querySelector('nav');
    let links = document.querySelectorAll('nav li');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove("active")
      })
    })
  }, []);

  const handleRedict = () => {
    navigate("/")
  };

  return (
    <nav className='navBar'>
      <img src={logo} onClick={handleRedict} alt='logo' />

      <ul>
        <li>A propos</li>
        <li>Secteurs d'activités</li>
        <li>Emplois</li>
        <li>Contacts</li>
      </ul>
      <div id='icons' onClick={() => displayMenu()}></div>
    </nav>
  )
}

export default Navbar