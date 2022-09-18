let lastMod = new Date(document.lastModified);

let modifiedDate = document.getElementById("last-modified");
modifiedDate.innerHTML = lastMod.toLocaleString();
