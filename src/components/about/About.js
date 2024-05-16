import React from 'react';
import './About.module.scss';
import { Box } from "@mui/material";
import { info } from "../../info/Info";

// This is the About component
export default function About({ innerRef }) {
    const firstName = info.firstName.toLowerCase(); // Make the first name lowercase

    // Function to return about me text
    function aboutMeText() {
        return (
            <>
                {info.bio} {/* Show the bio from info */}
            </>
        );
    }

    // Function to return skills text
    function skillsText() {
        return (
            <>
                <p><span style={{ textAlign: 'justify', color: info.baseColor, fontSize: '20px', margin: '5px'}}>Skills: </span></p>
                <p style={{ textAlign: 'justify', color: info.baseColor, fontSize: '20px', width: '200px', margin: '5px' }}> Proficient With</p>
                <ul className="skills" style={{textAlign: 'justify', fontSize: '15px', margin: '5px', lineHeight: '25px'}}>
                    {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)} {/* List of skills I'm proficient with */}
                </ul>
                <p style={{ textAlign: 'justify', color: info.baseColor, fontSize: '20px', margin: '5px' }}> Exposed To</p>
                <ul className="skills" style={{ fontSize: '15px', margin: '5px', lineHeight: '25px' }}>
                    {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)} {/* List of skills I've been exposed to */}
                </ul>
            </>
        );
    }

    // Function to return hobbies text
    function miscText() {
        return (
            <>
                <p><span style={{ textAlign: 'justify', color: info.baseColor, fontSize: '20px' }}> </span> </p>
                <p><span style={{ textAlign: 'justify', color: info.baseColor, fontSize: '20px' }}>hobbies/interests: </span> </p>
                <ul style={{ fontSize: '20px' }}>
                    {info.hobbies.map((hobby, index) => (
                        <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li> // List of hobbies with emojis
                    ))}
                </ul>
            </>
        );
    }

    // Function to create parallel columns layout
    function parallelColumns(column1, column2) {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, padding: '10px' }}>{column1}</div> {/* First column */}
                <div style={{ flex: 1, padding: '10px' }}>{column2}</div> {/* Second column */}
            </div>
        );
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <div style={{
                textAlign: 'justify',
                border: '0',
                padding: '0',
                margin: '0',
                maxWidth: '875px',
                marginLeft: '50px',
                marginRight: '50px',
                letterSpacing: '1px',
                wordSpacing: '1px',
                lineSpacing: '2px'
            }}>
                <h1>I'm David Vu, I live in Cali and am an aspiring VR Game Developer!</h1> {/* Title with introduction */}
            </div>
            <div style={{
                fontSize: '18px',
                textAlign: 'justify',
                border: '0px',
                padding: '20px',
                margin: '0px',
                maxWidth: '850px',
                marginLeft: '50px',
                marginRight: '50px',
                letterSpacing: '1px',
                wordSpacing: '1px',
                lineHeight: '30px'
            }}>
                {aboutMeText()} {/* Render the about me text */}
            </div>
            {parallelColumns(skillsText(), miscText())} {/* Render skills and hobbies in parallel columns */}
        </Box>
    );
}
