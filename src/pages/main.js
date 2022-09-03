import React from 'react';
import { Routess } from '../config';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar, Header } from '../components';
const Main = () => {
    return(
        <>
            <div className="container">
                <Router>
                    <Sidebar />
                    <Header />
                    <Routess />
                </Router>
            </div>
        </>
    )
}

export default Main