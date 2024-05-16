import React from 'react';

// IconLink component to render a link with an icon and title
function IconLink(props) {
    const { link, title, icon } = props; // Destructuring props to get link, title, and icon

    return (
        // Anchor tag to create a clickable link that opens in a new tab
        <a href={link} target={"_blank"} rel="noopener noreferrer">
            {/* Icon element to display the provided icon class */}
            <i className={icon}/> {title} {/* Display the icon followed by the title text */}
        </a>
    );
}

export default IconLink; // Exporting the IconLink component
