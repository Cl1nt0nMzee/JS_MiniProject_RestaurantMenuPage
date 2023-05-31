const clearButton_El = document.getElementById('clear');
const itemsWrapper_El = document.getElementById('itemsSection');
const filterChips_Els = document.getElementById('container');
const filter_Chips = document.querySelectorAll('.Fil_Chip_container');


const menuItems = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "/assets/images/Placeholder-Image.svg",
        des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
        id: 2,
        title: "Godzilla Milkshakes",
        category: "breakfast",
        price: 15.99,
        img: "/assets/images/Placeholder-Image.svg",
        des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"

    },
    {
        id: 3,
        title: "Diner Double",
        category: "breakfast",
        price: 15.99,
        img: "/assets/images/Placeholder-Image.svg",
        des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"

    }
]

current_Items = [];
active_filters = [];

/* Populate Menu*/
function populateMenu(element) {
   

    element.forEach(element => {
        let current, currentTitle, currentImage, currentPrice, currentCategory, currentDescription

        current = document.createElement('div'); // Create Parent Wrapper Div
        current.setAttribute('class', 'foodComponent'); // Add CSS  

        currentImage = document.createElement('img'); // Create Image Element
        currentImage.setAttribute('src', `${element['img']}`) // Add Img Source
        current.append(currentImage); // Add To Parent Wrapper

        currentTitle = document.createElement('h3'); // Create H3 Element
        currentTitle.innerText = element['title']; // Add Title
        current.append(currentTitle); // Add To Parent Wrapper

        currentPrice = document.createElement('h4'); // Create H3 Element
        currentPrice.innerText = `${element['price']} €`; // Add Title
        current.append(currentPrice); // Add To Parent Wrapper



        currentDescription = document.createElement('p');
        currentDescription.innerText = element['des'];
        current.append(currentDescription);

        itemsWrapper_El.appendChild(current)
    });

}
[]

// Manage Chips     
/*
filterChips_Els.addEventListener('click', function (event) {
    let current = event.target
    
    current.setAttribute('class','container checked');
}) */

filterChips_Els.addEventListener('click', (event) => {
    let status, current

    current = event.target;
    status = current.checked;

    if (status === true) {
        filterChips_Els.setAttribute('class','Fil_Chip_container checked');
    } else if(status === false) {
        filterChips_Els.setAttribute('class','Fil_Chip_container');
    }
})


// Zwischenstation
clearButton_El.addEventListener('click', function(event) {
    let status, current

    current = event.target;
    status = ve.checked;
    console.log(status)
})

console.log(menuItems[0])
console.log(menuItems[0]['title'])

populateMenu(menuItems);

filter_Chips.forEach(item => {
    item.addEventListener('click', event => {
        let status, current, value

        current = event.target;
        status = current.checked;
        
        value = current.getAttribute('value');

        if (status === true) {
            item.setAttribute('class','Fil_Chip_container checked');

            active_filters.push(value);
            console.log(active_filters)
        } else if(status === false) {
            item.setAttribute('class','Fil_Chip_container');

            index = active_filters.indexOf(`${value}`)
            active_filters.splice(index, 1)
            console.log(active_filters)
        }
    })
})

function createDeletechip(){
    let current, wrapper = filterChips_Els


}