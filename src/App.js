import React from 'react'; // Importing React
import './App.module.scss'; // Importing SCSS for styling
import BaseLayout from "./components/BaseLayout"; // Importing the BaseLayout component
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing

// App component that serves as the root component of the application
function App() {
   return (
      <div>
         {/* Wrapping the application with BrowserRouter to enable routing */}
         <BrowserRouter>
            {/* Rendering the BaseLayout component */}
            <BaseLayout />
         </BrowserRouter>
      </div>
   );
}

export default App; // Exporting the App component
