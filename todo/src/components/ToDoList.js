import React from 'react';

const ToDoList =()=>(
    <>
    <h1 className="m-3 text-center">Liste des etudes </h1>
    <ul className="list-group m-3">
            <li className="list-group-item d-flex align-tiems-center">
                etudier html
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                etudier  java script
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                etudier nodejs
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                etudier reactjs 
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                etudier angular
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
        </ul>
        </>

)
export default ToDoList