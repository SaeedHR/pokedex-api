// toUpperCase charAt
let capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

// toLowerCase
let lowerCaseName = string => string.toLowerCase().trim();

// createElement
let createEl = (tag, txt) => {
    let el = document.createElement(tag);
    if (txt) {
        txt = document.createTextNode(txt);
        el.appendChild(txt);
    }
    return el;
};
