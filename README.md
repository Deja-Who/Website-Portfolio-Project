
David Vu's Website Portfolio

## Components

### `App.js`
The root component that sets up routing using `BrowserRouter` and renders `BaseLayout`.

### `BaseLayout.js`
Manages the main layout of the application, including the Navbar and routing between different sections.

### `Navbar.js`
Renders the navigation bar with links to different sections of the website. It includes scroll behavior and styling.

### `Portfolio.js`
Renders the portfolio section, mapping through projects and displaying them using `PortfolioBlock`.

### `PortfolioBlock.js`
Displays individual portfolio items including image, title, and links to live demo and source code.

### `SocialIcon.js`
Renders social media icons with links.

### `useScrollObserver.js`
A custom hook that observes when an element is in view and triggers a function.

## Styling

Styling is managed using SCSS modules. Each component has its associated SCSS file for modular and maintainable styling.

- `App.module.scss`: Styles for the `App` component.
- `Navbar.module.scss`: Styles for the `Navbar` component.

