// weekly-data.js

const menuItems = [
    {
        name: "Daal Rice (Vegan)",
        description: "Onion, sweet pepper, sauteed turmeric-lime rice",
        details: "Chana daal with cauliflower and spinach with onion, ginger, and spice blends"
    },
    {
        name: "Peas Pulao",
        description: "Rice with peas, spiced honey BBQ tofu",
        details: "Chana Daal with cauliflower and spinach spice blends with pineapple chutney"
    },
    {
        name: "Tilapia",
        description: "Tilapia cooked in sweet and sour sauce, tamarind masala",
        details: "Served with onion, sweet pepper, sauteed turmeric-lime rice"
    },
    {
        name: "Bengali Style Salmon Bhuna",
        description: "Salmon cooked with onion, ginger, garlic, tomato, spices, and cilantro",
        details: "Pease Pulao and Fried green beans, pineapple chutney"
    }
];

// This function generates the HTML for the list
function renderWeeklyMenu() {
    const menuContainer = document.getElementById('weekly-menu-list');

    // Clear current content
    menuContainer.innerHTML = '';

    // Loop through items and create HTML cards
    menuItems.forEach(item => {
        const itemHTML = `
            <div class="menu-item-card">
                <h3>${item.name}</h3>
                <p class="menu-desc">${item.description}</p>
                <p class="menu-details">${item.details}</p>
            </div>
        `;
        menuContainer.innerHTML += itemHTML;
    });
}

// Run this when the page loads
document.addEventListener('DOMContentLoaded', renderWeeklyMenu);