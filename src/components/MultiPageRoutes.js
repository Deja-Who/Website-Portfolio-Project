import Home from "./home/Home"; // Importing the Home component
import About from "./about/About"; // Importing the About component
import Portfolio from "./portfolio/Portfolio"; // Importing the Portfolio component
import React from 'react'; // Importing React
import { Route, Routes } from 'react-router-dom'; // Importing Route and Routes components from react-router-dom

// MultiPageRoutes component to define the routes for a multi-page layout
export default function MultiPageRoutes() {
    return (
        // Routes component to define the route mappings
        <Routes>
            {/* Route for the home page*/}
            <Route exact path={'/'} element={<Home />} />
            {/*  Route for the about page */}
            <Route exact path={'/about'} element={<About />} />
            {/*  Route for the portfolio page */}
            <Route exact path={'/portfolio'} element={<Portfolio />} />
        </Routes>
    )
}
