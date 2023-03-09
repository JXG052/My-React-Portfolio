import React from 'react';
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
          style={({isActive}) => {
            return{
             fontWeight: isActive ? "bold" : "",
             color: isActive? "Green" : "blue",
            };
           }}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Discover"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }

          style={({isActive}) => {
           return{
            fontWeight: isActive ? "bold" : "",
            color: isActive? "Green" : "blue",
           };
          }}
        >
          Discover
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Search"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          style={({isActive}) => {
            return{
             fontWeight: isActive ? "bold" : "",
             color: isActive? "Green" : "blue",
            };
           }}
        >
          Search
        </NavLink>
      </li>
      
    </ul>
  );
}

export default NavTabs;
