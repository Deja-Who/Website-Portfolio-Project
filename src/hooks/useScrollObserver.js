import { useEffect } from "react"; // Importing useEffect hook from React
import { useInView } from "react-intersection-observer"; // Importing useInView hook from react-intersection-observer

export default function useScrollObserver(action) {
    // Destructuring ref, inView, and entry from useInView hook
    const { ref, inView, entry } = useInView({
        rootMargin: '-50% 0% -50% 0%' // Setting the root margin to trigger at 50% of the viewport
    });

    // useEffect to call the action function when the element comes into view
    useEffect(() => {
        if (entry && inView) { // Check if entry exists and element is in view
            action(entry.target.id); // Call the action function with the element's id
        }
    }, [entry, action, inView]); // Dependencies array to run effect on changes to entry, action, or inView

    return ref; // Return the ref to be assigned to the observed element
}
