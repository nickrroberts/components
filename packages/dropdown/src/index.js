import './dropdown.css';

export default function Dropdown () {
  const dropdowns = document.querySelectorAll(".dropdown");

  for (let dropdown of dropdowns) {    
    const select = dropdown.querySelector(".dropdown-select");
    const selection = dropdown.querySelector(".dropdown-selection");
    const options =  dropdown.querySelector(".dropdown-options");

    select.addEventListener('click', (event) => {
        event.stopPropagation();
        options.classList.toggle('display');
    })

    options.addEventListener('click', (event) => {
        if (event.target.matches('li')) {
            selection.textContent = event.target.textContent;
            options.classList.remove('display');
        }        
    })
  }

  document.addEventListener('pointerdown', (event) => {
      dropdowns.forEach(dropdown => {
        const options = dropdown.querySelector(".dropdown-options");
    
        if (!dropdown.contains(event.target)) {
          options.classList.remove('display');
        }
      });
    });
}


