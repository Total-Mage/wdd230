let lastMod = new Date(document.lastModified);
let currentCopy = new Date().getFullYear();

let modifiedDate = document.getElementById("last-modified");
modifiedDate.innerHTML = lastMod.toLocaleString();

let copyDate = document.getElementById("copy-year");
copyDate.innerHTML = currentCopy;