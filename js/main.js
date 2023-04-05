// Selector function
const getElement = (selector)=>{
    const element = document.querySelector(selector)
    if(element) return element
    throw Error(`Please check your class name, there is no ${selector} class name.`)
}

// Date--------------------------------
const currentYear = getElement("#date")
const year = new Date().getFullYear()
currentYear.textContent = year

