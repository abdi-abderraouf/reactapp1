import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask  from './AddTask';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            
        <section id="todo">
           <Router>
           <div>
               <Routes> 
               <Route path='/Add-Task'element={<AddTask/>}/>
               <Route path='/' element={<ToDoList/>}/>
               <Route path='/completed' element={<ToDoList/>}/>
               </Routes>
            </div> 
           <NavBar/>
           </Router>
             
         </section>
            
        )
    }
    
}
export default App
