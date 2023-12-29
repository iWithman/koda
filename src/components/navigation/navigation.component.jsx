import React from 'react';

import { BrowserRouter as Router, NavLink } from "react-router-dom";

import './navigation.scss';

const Navigation = () => {
  let routes = [
    {
      path: "/",
      name: "Home",
      exact: true
    },
    {
      path: "/about",
      name: "About",
      exact: true
    }
  ];
  return ( 
    <>
      <div className="navigation">
        <Router>
          {
            routes.map((route, index) => {
              const isLast = index === routes.length - 1
              return (
                <NavLink 
                  key={index} 
                  to={route.path} 
                  exact={route.exact} 
                  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>
                  {route.name}
                  {!isLast && <span className="dot"></span>}
                </NavLink>
              )
            })
          }
        </Router>
      </div>
    </>
  );
}
 
export default Navigation;