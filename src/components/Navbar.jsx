import React from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import { useDispatch} from "react-redux";
import { LogOut, reset } from "../features/authSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () =>{
    dispatch(LogOut())
    dispatch(reset())
    navigate("/")
  }
  return (
    <div>
      <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <NavLink  to={"/dashboard"}class="navbar-item">
            <img
              src="https://i.pinimg.com/originals/4f/bd/d3/4fbdd37e3692bad9a85300bb3a26ad0d.png"
              width="40"
              height="40"
              alt="logo"
            />
          </NavLink>

          <a
          href="!#"
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button onClick={logout} class="button is-light">Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
