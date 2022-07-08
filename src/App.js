import React from 'react';
import Dashboard from "./Components/Dashboard";
import Header from './Components/Header';
import Sidebar from "./Components/Sidebar";
 
function App(){
 
        return (
            <div>
                <Header/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default App