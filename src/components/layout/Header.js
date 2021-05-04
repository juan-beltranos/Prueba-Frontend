import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="header__nav">
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li className="active ">
                      <Link to="/" className="text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/favorites" className="text-decoration-none">
                        Favorites
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
