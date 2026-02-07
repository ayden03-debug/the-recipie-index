// JavaScript Brain of the site.
// Responsibilites include: Filtering recipies, handling search, tags, adding interactivity (clicks, toggles etc.)

// Finds an element using a CSS selector to add it in our file to toggle hamburger icon; warns me if I typed the class name wrong

const getElement = (selector) =>{
    const element =document.querySelector(selector);
    if (element) return element
    throw Error(
        `Please dounle check your class name as there is no ${selector} class`)
       
    }
    const links = getElement('.nav-links')
    //navBtnDOM stores the button element in our HTML File for nav-btn
    const navBtnDOM = getElement('.nav-btn')

    //this part toggles the hamburger to add/remove the links
    navBtnDOM.addEventListener('click', () => {
        links.classList.toggle('show-links')
    })


    const date = getElement('#date');
    const currentYear = new Date().getFullYear()
    date.textContent = currentYear
