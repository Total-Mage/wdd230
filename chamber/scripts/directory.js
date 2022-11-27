let data;



const gridbutton = document.querySelector("#grid-btn");
const listbutton = document.querySelector("#list-btn");
const display = document.querySelector("#directory-list");
const children = document.querySelectorAll("#directory-list > *");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	children.forEach( () =>
  this.classList.add("card")
  );
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
	children.forEach( () =>
  this.classList.remove("card")
  );
});

function getBusiness(){
  fetch(requestURL = "./data/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayGrid);
    data = businesses;
    console.log('Fetching complete')
  });
}

function displayGrid(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.setAttribute('class', 'card');
    card.classList.add("card-body");
    let logo = document.createElement('img');

    // Change the textContent property of the h2 element to contain the business's full name
    let name = document.createElement('p');
    let businessName = business.name;
    name.textContent = businessName;

    logo.setAttribute('src', business.image);
    logo.setAttribute('alt', 'Business logo of ' + businessName);
    logo.setAttribute('loading', 'lazy');

    let cardDeat = document.createElement('div');
    cardDeat.classList.add("cardDeat");

    let membership = document.createElement('p');
    membership.textContent = "Membership Level: " +business.membership;
    
    let pnumber = document.createElement('p');
    pnumber.textContent = "Phone Number: " +business.number;

    let address = document.createElement('p');
    address.textContent = "Address: " +business.address;
    
    let website = document.createElement('p');
    website.innerHTML = `website: <a href="${business.website}">${business.website}</a>"`;
    
  
    // Add/append the section(card) with the h2 element

    card.appendChild(logo);
    card.appendChild(cardDeat);
    cardDeat.appendChild(name);
    cardDeat.appendChild(membership);
    cardDeat.appendChild(pnumber);
    cardDeat.appendChild(address);
    cardDeat.appendChild(website);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('section#directory-list').appendChild(card);
  }

getBusiness();
//   function reset(){
//     temHolder = document.getElementById("temples");
    
//     let first = temHolder.firstElementChild;
//     while (first) {
//         first.remove();
//         first = temHolder.firstElementChild;
//     }
// }
