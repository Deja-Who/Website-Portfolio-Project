import profilePic from "../img/profilePic.png"; // Importing profile picture
import RT3AI from "../img/RT3AI.png"; // Importing project image

// Array of colors used for styling
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

// Flag to determine if the website layout is single-page or multi-page
export let singlePage = false;

// Object containing personal information and details for the portfolio
export const info = {
    firstName: "David", // First name
    lastName: "Vu", // Last name
    initials: "DV", // Initials used in the navbar
    position: "a Computer Science Major", // Position or role
    selfPortrait: profilePic, // Profile picture
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // Gradient color for styling
    baseColor: colors[0], // Base color for styling
    miniBio: [ // Short bio details with emojis
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "STEAM Instructor at DreamsForSchools"
        },
        {
            emoji: "📧",
            text: "davidducminhvu2@gmail.com"
        },
        {
            text: <h2>Contact Me</h2>
        },
        {
            text: <span className="center-text">Email: davidducminhvu2@gmail.com</span>
        },
        {
            text: <span className="center-text">Phone #: 1 (714) 675-1658</span>
        },
        {
            text: <span className="center-text">GitHub: <a href="https://github.com/Deja-Who" target="_blank" rel="noopener noreferrer" style={{ color: 'green', textDecoration: 'underline' }}>Deja-Who</a></span>
        },
        {
            text: <span className="center-text">LinkedIn: <a href="https://linkedin.com/in/david-vu-679a5b217/" target="_blank" rel="noopener noreferrer" style={{ color: 'green', textDecoration: 'underline' }}>David Vu</a></span>
        }
    ],
    socials: [ // Social media links with icons
        {
            link: "https://www.instagram.com/uvdivad/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Deja-Who",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/david-vu-679a5b217/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "I am currently pursuing my Bachelor's Degree in Comp Sci at CSUF and am expecting to graduate in 2024. During my time at CSUF I have worked on group projects using C++, React, HTML, Unity, xCode, Python, NodeJS, and GitHub. I also recently picked up a job teaching introductory level computer science for K-12 kids. When I'm not swamped with school or work I like to go on group hikes, binge movies, game, practice boxing, or practice cooking.",
    skills: {
        proficientWith: ['C++', 'GitHub', 'Unity'], // Skills I am proficient with
        exposedTo: ['NodeJS', 'Python', 'HTML', 'JS', 'xCode', 'Firebase'] // Skills I have been exposed to
    },
    hobbies: [ // Hobbies with emojis
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'boxing',
            emoji: '🥊'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ // Projects
        {
            title: "Reverse Tic Tac Toe AI (Python)",
            image: RT3AI
        }
    ]
}
