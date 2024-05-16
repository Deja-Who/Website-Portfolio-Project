import React from 'react'; // Importing React
import PortfolioBlock from "./PortfolioBlock"; // Importing the PortfolioBlock component
import { Box, Grid } from "@mui/material"; // Importing Box and Grid components from Material-UI
import { info } from "../../info/Info"; // Importing the info object containing portfolio data

// Portfolio component to render the portfolio section
export default function Portfolio({ innerRef }) {
    return (
        // Box component acting as the container for the portfolio section
        <Box id={'portfolio'} ref={innerRef}>
            {/* Grid container to organize the portfolio items */}
            <Grid container display={'flex'} justifyContent={'center'}>
                {/* Mapping over the portfolio items and rendering each one in a Grid item */}
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}> {/* Each project takes full width on small screens and half on medium screens */}
                        <div style={{ margin: '50px' }}> {/* Adding margin around each portfolio block */}
                            <PortfolioBlock 
                                image={project.image} 
                                live={project.live} 
                                source={project.source} 
                                title={project.title} 
                            />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
