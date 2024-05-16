import React, { useEffect, useState } from 'react'; // Importing React hooks
import Style from './BaseLayout.module.scss'; // Importing SCSS module for styling
import Navbar from "./Navbar"; // Importing Navbar component
import { useLocation } from "react-router-dom"; // Importing hook to get the current route
import { Box, Grid } from "@mui/material"; // Importing Box and Grid components from Material-UI
import MultiPageRoutes from './MultiPageRoutes'; // Importing MultiPageRoutes component
import useScrollObserver from '../hooks/useScrollObserver'; // Importing custom hook for scroll observation

// BaseLayout component to manage the main layout of the application
export default function BaseLayout() {
    const location = useLocation(); // Get the current location object

    // State to track the active section based on the current path
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    // Setting up scroll observers for different sections
    const refHome = useScrollObserver(setActive); // Observer for Home section
    const refAbout = useScrollObserver(setActive); // Observer for About section
    const refPortfolio = useScrollObserver(setActive); // Observer for Portfolio section

    return (
        // Main container with dark background
        <Box className={Style.dark}>
            {/* Grid layout to structure the page */}
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
                justifyContent={'space-between'}>
                
                {/* Navbar at the top */}
                <Grid item>
                    <Navbar active={active} setActive={setActive} />
                </Grid>

                {/* Main content area */}
                <Grid item flexGrow={1}>
                    {<MultiPageRoutes />}
                </Grid>

                {/* Footer at the bottom */}
                <Grid item>
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                        py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
