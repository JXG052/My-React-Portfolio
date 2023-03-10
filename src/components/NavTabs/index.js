import React from 'react';
import './NavTabs.css'
import { NavLink } from 'react-router-dom';


function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          // style={({isActive}) => {
          //   return{
          //    fontWeight: isActive ? "bold" : "",
          //    color: isActive? "Green" : "blue",
          //   };
          //  }}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Portfolio"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }

          // style={({isActive}) => {
          //  return{
          //   fontWeight: isActive ? "bold" : "",
          //   color: isActive? "Green" : "blue",
          //  };
          // }}
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          // style={({isActive}) => {
          //   return{
          //    fontWeight: isActive ? "bold" : "",
          //    color: isActive? "Green" : "blue",
          //   };
          //  }}
        >
          Contact
        </NavLink>
      </li>
      
    </ul>
  );
}

export default NavTabs;
