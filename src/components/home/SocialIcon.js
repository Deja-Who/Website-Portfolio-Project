import React from 'react';

// SocialIcon component to render social media icons as clickable links
function SocialIcon(props) {
    const { link, icon, label } = props; // Destructuring props to get link, icon, and label

    return (
        // Anchor tag to create a clickable link that opens in a new tab
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            {/* Icon element to display the social media icon */}
            <i className={icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon; // Exporting the SocialIcon component
