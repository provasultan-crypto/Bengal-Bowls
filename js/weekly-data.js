const menuItems = [
    {
        name: "Daal Rice (Vegan)",
        description: "Onion, sweet pepper, sauteed turmeric-lime rice",
        details: "Chana daal with cauliflower and spinach with onion, ginger, and spice blends",
        price: "$12.00"
    },
    {
        name: "Peas Pulao",
        description: "Rice with peas, spiced honey BBQ tofu",
        details: "Chana Daal with cauliflower and spinach spice blends with pineapple chutney",
        price: "$14.00"
    },
    {
        name: "Bengali Style Salmon Bhuna",
        description: "Salmon cooked with onion, ginger, garlic, tomato, spices, and cilantro",
        details: "Pease Pulao and Fried green beans, pineapple chutney",
        price: "$16.00"
    }
];

function renderWeeklyMenu() {
    const menuContainer = document.getElementById('weekly-menu-list');
    menuContainer.innerHTML = '';

    menuItems.forEach(item => {
        const itemHTML = `
            <div class="menu-item-card">
                <h3>${item.name}</h3>
                <p class="menu-desc">${item.description}</p>
                <p class="menu-details">${item.details}</p>
                <p class="menu-price">${item.price}</p>
            </div>
        `;
        menuContainer.innerHTML += itemHTML;
    });
}

document.addEventListener('DOMContentLoaded', renderWeeklyMenu);