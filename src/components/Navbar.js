
import Style from './Navbar.module.scss'; // Importing SCSS module for styling
import { HashLink as Link } from 'react-router-hash-link'; // Importing HashLink component for hash-based navigation
import { Box } from "@mui/material"; // Importing Box component from Material-UI
import { info } from "../info/Info"; // Importing info object containing personal information
import { singlePage } from '../info/Info'; // Importing flag to determine single or multi-page layout

// Array of link objects for the navbar
const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: 'portfolio',
        active: 'portfolio'
    },
    {
        name: '',
        to: 'contact',
        active: 'contact'
    }
]

// Function to create a scroll offset to compensate for the navbar when clicking on nav buttons
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; // Get the element's top position
    const yOffset = -80; // Offset value to account for the navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); // Scroll to the element with smooth behavior
}

// Navbar component to render the navigation bar
export default function Navbar({ handleClick, active, setActive }) {
    return (
        // Box component acting as the nav container
        <Box component={'nav'} width={'100%'} position={singlePage ? 'fixed' : 'relative'} className={Style.dark}>
            {/* Unordered list to display the nav links */}
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                fontSize={'1rem'}>
                {/* Mapping over the links array to create nav items */}
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.baseColor }}>
                        {/* Link component for navigation */}
                        <Link to={singlePage ? `#${link.to}` : `/${link.to}`}
                            scroll={el => scrollWidthOffset(el)}
                            smooth
                            onClick={() => setActive(link.active)} className={Style.link}>
                            {/* Display link name or initials based on link type */}
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
