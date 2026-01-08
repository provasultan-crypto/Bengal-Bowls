// MAIN NAVIGATION AND PAGE LOADING

let isSignIn = true;

// Load page content
async function loadPage(pageName) {
    try {
        const response = await fetch(`pages/${pageName}.html`);
        const html = await response.text();
        document.getElementById('content').innerHTML = html;

        // If loading freezer page, initialize products
        if (pageName === 'freezer') {
            initProducts();
        }

        // If loading cart page, render cart
        if (pageName === 'cart') {
            renderCart();
        }

        // Close mobile menu if open
        document.getElementById('navLinks').classList.remove('active');

        // Scroll to top
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error loading page:', error);
        document.getElementById('content').innerHTML = '<div class="content-wrapper"><h1>Error loading page</h1></div>';
    }
}

// Initialize products on freezer page
function initProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='Product Image'">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    ${product.soldOut
            ? '<span class="sold-out-badge">SOLD OUT</span>'
            : `<button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>`
        }
                </div>
            </div>
        </div>
    `).join('');
}

// Auth Modal Functions
function openAuthModal() {
    document.getElementById('authModal').classList.add('active');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
}

function toggleAuthMode() {
    isSignIn = !isSignIn;
    const title = document.getElementById('authTitle');
    const submitBtn = document.getElementById('authSubmit');
    const toggleText = document.getElementById('toggleText');
    const nameGroup = document.getElementById('nameGroup');

    if (isSignIn) {
        title.textContent = 'Sign In';
        submitBtn.textContent = 'Sign In';
        toggleText.innerHTML = 'Don\'t have an account? <a onclick="toggleAuthMode()">Create Account</a>';
        nameGroup.style.display = 'none';
    } else {
        title.textContent = 'Create Account';
        submitBtn.textContent = 'Create Account';
        toggleText.innerHTML = 'Already have an account? <a onclick="toggleAuthMode()">Sign In</a>';
        nameGroup.style.display = 'block';
    }
}

function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;

    if (isSignIn) {
        alert(`Signed in as ${email}`);
    } else {
        alert(`Account created for ${name} (${email})`);
    }

    closeAuthModal();
    document.getElementById('authForm').reset();
}

// Mobile menu toggle
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Load home page by default
    loadPage('home');

    // Navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Cart button
    document.querySelector('.cart-btn').addEventListener('click', function (e) {
        e.preventDefault();
        loadPage('cart');
    });
});