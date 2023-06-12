const fil_chip_Elements = document.querySelectorAll('.Fil_Chip_wrapper');
const del_chip_Elements = document.querySelectorAll('.deletableChips');
const item_counter_Element = document.getElementById('itemCounter');
const clear_button_El = document.getElementById('clear');
const del_chip_container = document.getElementById('delChips_Container');
const itemsWrapper_El = document.getElementById('itemsSection');


const menu_database = [
    {
        id: 1,
        title: "American Pancakes ",
        category: "breakfast",
        price: 3.990,
        img: '/assets/images/AmercianPancakes.svg',
        des: "Easy, American-style, fluffy pancakes are great for feeding a crowd at breakfast or brunch. Top with something sweet like fruit, jam or syrup, or rashers of crispy bacon."
    },
    {
        id: 2,
        title: "Overnight Oats",
        category: "breakfast",
        price: 3.45,
        img: "/assets/images/OvernightOats.png",
        des: "Start your day right with our nutritious and hassle-free overnight oats. A delightful blend of rolled oats, creamy yogurt, and your choice of toppings creates a hearty and satisfying breakfast. As you sleep, the oats magically transform into a creamy and flavorsome treat, ready to be enjoyed as soon as you wake up. Say goodbye to rushed mornings and savor the convenience and deliciousness of our overnight oats."

    },
    {
        id: 3,
        title: "Poached Eggs",
        category: "breakfast",
        price: 2.35,
        img: "/assets/images/PoachedEggs.png",
        des: "Indulge in the simple elegance of perfectly poached eggs. Delicately cooked to perfection, our poached eggs offer a luscious and velvety yolk nestled within a tender, snow-white exterior. A versatile delight that pairs well with toast, salads, or even a classic Eggs Benedict. Elevate your breakfast game with these heavenly poached eggs."

    },
    {
        id: 4,
        title: "Easy Crepes",
        category: "breakfast",
        price: 4.20,
        img: "/assets/images/EasyCrepes.png",
        des: "Experience the joy of homemade crepes without the fuss. Our easy crepe recipe lets you create delectable, thin pancakes in a snap. Light and delicate, these crepes can be filled with your favorite sweet or savory ingredients. From mouthwatering Nutella and strawberries to savory ham and cheese, the possibilities are endless. With our foolproof recipe, you'll become a crepe master in no time."

    },
    {
        id: 5,
        title: "Falafel Burgers",
        category: "lunch",
        price: 7.90,
        img: "/assets/images/FalafelBurgers.png",
        des: "Elevate your burger game with our mouthwatering Falafel Burgers. Crispy, golden-brown falafel patties, bursting with Middle Eastern flavors, are nestled in a soft bun with fresh toppings and zesty sauces. Each bite offers a delightful combination of textures and a satisfyingly hearty and flavorful vegetarian option for burger enthusiasts."

    },
    {
        id: 6,
        title: "Veggie Noodle Pot",
        category: "lunch",
        price: 12.45,
        img: "/assets/images/VeggieNoodlePot.png",
        des: "Experience a burst of vibrant flavors with our Veggie Noodle Pot. This wholesome and nourishing dish combines colorful vegetables, tender noodles, and aromatic herbs and spices. Whether enjoyed hot or cold, it's a perfect on-the-go meal that packs a punch of freshness, making it a nutritious choice that doesn't compromise on taste."

    },
    {
        id: 7,
        title: "Caesar Pitta ",
        category: "lunch",
        price: 8.50,
        img: "/assets/images/CaesarPitta.png",
        des: "Indulge in a twist on a classic with our tantalizing Caesar Pitta. Crisp romaine lettuce, succulent grilled chicken, and a tangy Caesar dressing are all nestled inside a warm and fluffy pita bread. This handheld delight offers a satisfying combination of textures and flavors, perfect for a quick lunch or a light dinner option that doesn't skimp on taste."

    },
    {
        id: 8,
        title: "Deli Couscous ",
        category: "lunch",
        price: 13.90,
        img: "/assets/images/DeliCouscous.png",
        des: "Transport your taste buds to the Mediterranean with our vibrant Deli Couscous. Fragrant couscous, tossed with an array of fresh vegetables, zesty herbs, and a drizzle of lemon-infused dressing, creates a light and refreshing dish that bursts with Mediterranean flavors. Perfect as a side or a standalone meal, this couscous salad will transport you to sun-soaked shores."

    },
    {
        id: 9,
        title: "Chilli Con Carne",
        category: "dinner",
        price: 12.90,
        img: "/assets/images/ChilliConCarne.png",
        des: "Ignite your taste buds with our hearty and flavorful Chilli Con Carne. A medley of tender beef, aromatic spices, and rich tomatoes simmer together to create a mouthwatering chili that will warm you from the inside out. Perfectly paired with fluffy rice or warm tortillas, this classic dish is a crowd-pleaser that will satisfy even the most discerning chili lovers."

    },
    {
        id: 10,
        title: "Pasta",
        category: "dinner",
        price: 10.45,
        img: "/assets/images/Pasta.png",
        des: "Discover the ultimate comfort food with our delicious pasta dishes. From creamy Alfredo to zesty marinara, our homemade pasta recipes will transport you to the heart of Italy. Each bite reveals a perfect balance of flavors, whether it's the freshness of basil, the richness of parmesan, or the satisfying twirl of al dente pasta. Prepare to indulge in a bowl of pure pasta perfection."

    },
    {
        id: 11,
        title: "Teriyaki Chicken",
        category: "dinner",
        price: 12.90,
        img: "/assets/images/ChickenTeriyaki.png",
        des: "Transport your taste buds to the vibrant streets of Japan with our mouthwatering Teriyaki Chicken. Succulent chicken marinated in a sweet and savory glaze, charred to perfection and served with a side of steamed rice and crisp vegetables. This crowd-pleasing dish captures the essence of umami and offers a symphony of flavors that will leave you craving more."

    },
    {
        id: 12,
        title: "Thai Curry",
        category: "dinner",
        price: 11.90,
        img: "/assets/images/ThaiCurry.png",
        des: "Embark on a culinary adventure with the exotic flavors of our Thai Curry. Fragrant lemongrass, fiery chili, and creamy coconut milk meld together to create a harmonious balance of sweet, sour, and spicy notes. Each spoonful of this aromatic curry bursts with tender meat, fresh vegetables, and a complex blend of Thai spices. Indulge in a taste of Thailand that will transport you to the bustling streets of Bangkok."

    },
    {
        id: 13,
        title: "Strawberry Smoothie",
        category: "smoothie",
        price: 5.90,
        img: "/assets/images/StrawberrySmoothie.png",
        des: "Get your fruit fix with our strawberry smoothie made with banana and orange juice. It's free from dairy, so it's vegan too – making it a great start to anyone's day"

    },
    {
        id: 14,
        title: "Peanut Butter Smoothie",
        category: "smoothie",
        price: 6.50,
        img: "/assets/images/PeanutButterSmoothie.png",
        des: "Whizz up a quick and filling peanut butter smoothie, with rolled oats and banana. Brilliant for breakfast, you can freeze the banana for extra thickness"

    }
]

/* Hold Current Data (Depends on Active Filters) */
const current_menu = [...menu_database]
const mock_menu = [    
{
    id: 4,
    title: "Easy Crepes",
    category: "breakfast",
    price: 4.20,
    img: "/assets/images/EasyCrepes.png",
    des: "Experience the joy of homemade crepes without the fuss. Our easy crepe recipe lets you create delectable, thin pancakes in a snap. Light and delicate, these crepes can be filled with your favorite sweet or savory ingredients. From mouthwatering Nutella and strawberries to savory ham and cheese, the possibilities are endless. With our foolproof recipe, you'll become a crepe master in no time."

},
{
    id: 5,
    title: "Falafel Burgers",
    category: "lunch",
    price: 7.90,
    img: "/assets/images/FalafelBurgers.png",
    des: "Elevate your burger game with our mouthwatering Falafel Burgers. Crispy, golden-brown falafel patties, bursting with Middle Eastern flavors, are nestled in a soft bun with fresh toppings and zesty sauces. Each bite offers a delightful combination of textures and a satisfyingly hearty and flavorful vegetarian option for burger enthusiasts."

},
{
    id: 6,
    title: "Veggie Noodle Pot",
    category: "lunch",
    price: 12.45,
    img: "/assets/images/VeggieNoodlePot.png",
    des: "Experience a burst of vibrant flavors with our Veggie Noodle Pot. This wholesome and nourishing dish combines colorful vegetables, tender noodles, and aromatic herbs and spices. Whether enjoyed hot or cold, it's a perfect on-the-go meal that packs a punch of freshness, making it a nutritious choice that doesn't compromise on taste."

}]
const current_active_filters = []
const mock_filters = ['breakfast', 'smoothie', 'lunch', 'dinner']
const initializer = [undefined, null]
const filter_set = new Set(initializer)

/* Manages */
function filter_items() {
    let temp_list, working_list

    for (i = 0 ; i < filter_set.size ; i++) {
        temp_list = current_menu.filter(function(item) {
    
            return filter_set.has(item['category']) == true
        }
           )
        working_list = [...temp_list]
        
    }

    new_list = [...working_list]
    return new_list
}

function createDeletechip(element, element_2){
    let current, button

    element_2.toUpperCase();

    current = document.createElement('span');
    current.innerText = `${element_2}`;
    current.setAttribute('class', 'deletableChips');
    current.setAttribute('id', `${element}`)

    button = document.createElement('button');
    button.innerText = "X";
    button.setAttribute('onclick', 'kamikazaDeletablechip(event)')
    current.append(button);

    del_chip_container.appendChild(current);
}

function deleteChip(element) {
    let current = document.getElementById(`${element}`)

    current.remove()
}

function populateMenu() {
    let new_list = [] 
    
    let filtered_items = filter_items()
    
    filtered_items.forEach(item => {
        let current, currentTitle, currentImage, currentPrice, currentCategory, currentDescription

        current = document.createElement('div'); // Create Parent Wrapper Div
        current.setAttribute('class', 'foodComponent'); // Add CSS  

        currentImage = document.createElement('img'); // Create Image Element
        currentImage.setAttribute('src', `${item['img']}`) // Add Img Source
        current.append(currentImage); // Add To Parent Wrapper

        currentTitle = document.createElement('h3'); // Create H3 Element
        currentTitle.innerText = item['title']; // Add Title
        current.append(currentTitle); // Add To Parent Wrapper

        currentPrice = document.createElement('h4'); // Create H3 Element
        currentPrice.innerText = `${item['price']} €`; // Add Title
        current.append(currentPrice); // Add To Parent Wrapper

        currentDescription = document.createElement('p');
        currentDescription.innerText = item['des'];
        current.append(currentDescription);

        itemsWrapper_El.appendChild(current)
    });

    let count = filtered_items.length
    item_counter_Element.innerText = count
}

function depopulateMenu() {
    itemsWrapper_El.innerHTML = '';
}

function manageFilterChips(event) {
    let current, current_value, status, current_id

    //Add/remove from active Filters
    current = event.target
    item = current.parentNode
    current_value = current.getAttribute('value').toLowerCase()
    current_id = current.getAttribute('data-value')

    if (filter_set.has(current_value)) {
        filter_set.delete(current_value)

    } else {
        filter_set.add(current_value, current_value)
    }

    //Create/Delete deletable chip

    //Style Active/Default Filter Chip
    status = current.checked;
    if (status === true) {
        item.setAttribute('class','Fil_Chip_wrapper checked');
        createDeletechip(current_id, current_value)

    } else if(status === false) {
        item.setAttribute('class','Fil_Chip_wrapper');
        deleteChip(current_id)

    }

    //FilterItems
    if (filter_set.size == 2) {
        depopulateMenu();
        defaultDisplay()
    } else {
        depopulateMenu();
        populateMenu();
    }


}

function clearAllFilters() {
    let possible_filters = ['lunch', 'breakfast', 'dinner', 'smoothie']

    //Uncheck all filters
    let fil_chips = document.querySelectorAll('.Fil_Chip_wrapper');
    fil_chips.forEach(function(item) {
        let current = item.firstElementChild        
        
        if (current.checked == true)  {
            current.click()
        } else {
            console.log('Hi')
        }

    })
    //Clear all deletable chips
    possible_filters.forEach(item =>
        filter_set.delete(`${item}`)    
    )

    del_chip_Elements.forEach(item =>
        item.remove())

    depopulateMenu();
    defaultDisplay()
}

function defaultDisplay() {
    current_menu.forEach(item => {
        let current, currentTitle, currentImage, currentPrice, currentCategory, currentDescription

        current = document.createElement('div'); // Create Parent Wrapper Div
        current.setAttribute('class', 'foodComponent'); // Add CSS  

        currentImage = document.createElement('img'); // Create Image Element
        currentImage.setAttribute('src', `${item['img']}`) // Add Img Source
        current.append(currentImage); // Add To Parent Wrapper

        currentTitle = document.createElement('h3'); // Create H3 Element
        currentTitle.innerText = item['title']; // Add Title
        current.append(currentTitle); // Add To Parent Wrapper

        currentPrice = document.createElement('h4'); // Create H3 Element
        currentPrice.innerText = `${item['price']} €`; // Add Title
        current.append(currentPrice); // Add To Parent Wrapper

        currentDescription = document.createElement('p');
        currentDescription.innerText = item['des'];
        current.append(currentDescription);

        itemsWrapper_El.appendChild(current)})

        item_counter_Element.innerText = 'alle';

        
}

function noResultsDiplay() {

}

defaultDisplay();

function hardRefresh() {
    location.reload(true)
}

