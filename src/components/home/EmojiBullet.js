import React from 'react';
import { Box } from "@mui/material"; // Importing Box component from Material-UI

// This is the EmojiBullet component
function EmojiBullet(props) {
    const { emoji, text } = props; // Destructuring props to get emoji and text

    // Return a Box component styled as a list item
    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{ cursor: 'default' }}>
            {/* Another Box component for the emoji */}
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{ xs: '0.5rem', md: '1rem' }} fontSize={'1.5rem'}>{emoji}</Box> {text}
        </Box>
    );
}

export default EmojiBullet; // Export the EmojiBullet component
