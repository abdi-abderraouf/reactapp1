import React from 'react';
import {FaReadme,FaExpandArrowsAlt,FaPlus,FaRegTrashAlt  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const NavBar=()=>(

    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <NavLink  to='/'className="btn btn-outline-dark bg-light"><FaReadme/>liste etude</NavLink>
                <NavLink to='/completed' className="btn btn-outline-dark bg-light"><FaExpandArrowsAlt/>etude terminer</NavLink>
                <NavLink to='/Add-Task' className="btn btn-outline-dark bg-light"><FaPlus/>Ajouter etude</NavLink>

            </div>
            <button className="btn btn-outline-dark bg-light"><FaRegTrashAlt/>supprimer etude</button> 
        </footer>
)
export default NavBar