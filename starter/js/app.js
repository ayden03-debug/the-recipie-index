// JavaScript Brain of the site.
// Responsibilites include: Filtering recipies, handling search, tags, adding interactivity (clicks, toggles etc.)
const getElement = (selector) =>{
    const element =document.querySelector(selector);
    if (element) return element
    throw Error(
        `Please dounle check your class name as there is no ${selector} class`)
       
    }