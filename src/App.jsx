import React from 'react';
import { Navbar } from './Navbar';
import { Jumbotron } from './Jumbotron';
import Cards from './Cards';


const App = () => {
    return (
        <div className="container-fluid">
        <Navbar />
       <div className="container">
            
            <Jumbotron />
            </div>
            </div>
    )
}

export default App;