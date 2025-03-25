function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".dropdown {\n    position: relative;\n}\n\n.dropdown ul, .dropdown p {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.dropdown-select {\n    border: 1px solid rgb(203, 203, 203);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    padding: 0.25rem;\n}\n\n.dropdown li {\n    padding: 0.5rem 0.25rem;\n}\n\n.dropdown li:hover {\n    background-color: rgb(180, 200, 255);\n    border-radius: 5px;\n}\n\n.dropdown-options {\n    position: absolute;\n    width: 100%;\n    z-index: 1;\n    background-color: white;\n    border: 1px solid rgb(203, 203, 203);\n    padding: 0.5rem;\n    border-radius: 5px;\n    display: none;\n}\n\n.dropdown-options.display {\n    display: block;\n}\n\n.dropdown button {\n    border: none;\n    background-color: black;\n    color: white;\n    padding: 0.5rem 1rem;\n    border-radius:  5px;\n    margin-left: auto;\n}";
styleInject(css_248z);

function Dropdown () {
  const dropdowns = document.querySelectorAll(".dropdown");

  for (let dropdown of dropdowns) {    
    const select = dropdown.querySelector(".dropdown-select");
    const selection = dropdown.querySelector(".dropdown-selection");
    const options =  dropdown.querySelector(".dropdown-options");

    select.addEventListener('click', (event) => {
        event.stopPropagation();
        options.classList.toggle('display');
    });

    options.addEventListener('click', (event) => {
        if (event.target.matches('li')) {
            selection.textContent = event.target.textContent;
            options.classList.remove('display');
        }        
    });
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

export { Dropdown as default };
//# sourceMappingURL=index.js.map
