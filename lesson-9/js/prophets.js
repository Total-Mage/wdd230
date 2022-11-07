const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    let prophetName = prophet.name + ' ' + prophet.lastname;
    h2.textContent = prophetName;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    let ordinalWSuffix = ''
    if(prophet.order == 1){
        ordinalWSuffix = prophet.order + "st"
    }    
    else if(prophet.order == 2){
        ordinalWSuffix = prophet.order + "nd"
    }    
    else if(prophet.order == 3){
        ordinalWSuffix = prophet.order + "rd"
    }
    else{
        ordinalWSuffix = prophet.order + "th"
    }

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portrait of ' + prophetName +" - " +ordinalWSuffix +" Latter-day President");
    portrait.setAttribute('loading', 'lazy');

    // Add two other components for the birth date and birth place
    let bdate = document.createElement('p');
    bdate.textContent = prophet.birthdate;

    let bplace = document.createElement('p');
    bplace.textContent = prophet.birthplace;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(bdate);
    card.appendChild(bplace);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
