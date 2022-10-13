const eInput = document.getElementById('favchap');
const eButton = document.querySelector('.input button');
const eList = document.querySelector('.list');

eInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      eButton.click();
    }
  });
eButton.addEventListener('click', function(){

    if(eInput.value != ''){
        let newLI = document.createElement('li');
        newLI.textContent = eInput.value;

        const delButton = document.createElement('button');
        delButton.textContent = '❌';

        eList.appendChild(newLI);
        newLI.appendChild(delButton);

        eInput.value = '';
        eInput.focus();

        delButton.addEventListener('click', function(){
            newLI.remove();
            eInput.focus();

        }
        )
    }
}
)
eInput.focus();