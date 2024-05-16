import React from 'react';
import Style from './Home.module.scss'; // Importing the SCSS module for styling
import me from '../../img/profilePic.png'; // Importing the profile picture
import classNames from 'classnames'; // Utility for conditionally joining class names
import EmojiBullet from "./EmojiBullet"; // Importing the EmojiBullet component
import SocialIcon from "./SocialIcon"; // Importing the SocialIcon component
import { Box } from "@mui/material"; // Importing the Box component from Material-UI
import { info } from "../../info/Info"; // Importing the info object containing personal information

// Home component to render the main introduction section
export default function Home({ innerRef }) {
    return (
        // Box component acting as a container for the main section
        <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
             justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
             
            {/* Profile picture with styles for avatar and shadow effect */}
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'Profile Picture'} style={{ background: info.baseColor }} component={'img'} src={me} 
                 width={{ xs: '35vh', md: '40vh' }} height={{ xs: '35vh', md: '40vh' }} borderRadius={'50%'} p={'0.75rem'} 
                 mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
            
            {/* Container for text content */}
            <Box>
                <h1>Hi, I'm <span style={{ color: info.baseColor }}>{info.firstName}</span></h1> {/* Greeting with first name */}
                <h2>I'm {info.position}.</h2> {/* Displaying the position or role */}
                
                <Box component={'ul'} p={'0.8rem'}> {/* List of mini bios with emojis */}
                    {info.miniBio.map((bio, index) => (
                        <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} /> // Using EmojiBullet to display each mini bio item
                    ))}
                </Box>
                
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}> {/* Social media icons with spacing and font size adjustments */}
                    {info.socials.map((social, index) => (
                        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
