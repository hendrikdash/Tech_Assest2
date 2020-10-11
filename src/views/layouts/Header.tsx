import React, {FC} from 'react';
import {useHistory} from "react-router-dom";
interface InitComponent {
    Component?: object
}
const Header: FC<InitComponent> = (props) =>  {
    const history = useHistory();
  return (
    <header className="header-area overlay">
        <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
            {/* <a href="#" className="navbar-brand">Bootdey.com</a> */}
            
            <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
            </button>
            
            <div id="main-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li><a className="nav-item nav-link active" onClick={() => history.push("/")}>Home</a></li>
                    <li><a className="nav-item nav-link" onClick={() => history.push("/form-input")}>Form Input</a></li>
                </ul>
            </div>
        </div>
        </nav>
        
        <div className="banner">
            <div className="container">
                <h1>Form Pagination</h1>
                <p>Form pagination used for submit input data that contain a lot field, 
                    likes Country, Service which depends on Country on first page.
                    in second page contain receive amount and send amount with calculate receive amount from send amount.
                    in third page there's form input for recipient details like Bank Account info and
                    the last pages is fourth page list all input has made before with submit button.
                </p>
                <a onClick={() => history.push("/form-input")} className="button button-primary">Let's try it</a>
            </div>
        </div>
    </header>
  );
}

export default Header;















