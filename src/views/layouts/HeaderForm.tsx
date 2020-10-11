import React, {FC} from 'react';
import {Link, useHistory} from "react-router-dom";
interface InitComponent {
    Component?: object
}
const HeaderForm: FC<InitComponent> = (props) =>  {
    const history = useHistory();
  return (
    <header className="header-area-form-input overlay">
        <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#0f7aac"}}>
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
        
        
    </header>
  );
}

export default HeaderForm;















