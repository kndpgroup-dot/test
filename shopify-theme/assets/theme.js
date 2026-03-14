// Bleame Theme JavaScript

// Quantity controls
function increaseQty() {
  const input = document.getElementById('Quantity');
  if (input) {
    input.value = parseInt(input.value) + 1;
  }
}

function decreaseQty() {
  const input = document.getElementById('Quantity');
  if (input && parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

// Cart quantity updates
function updateCartQty(line, change) {
  const input = document.querySelector(`input[data-line="${line}"]`);
  if (input) {
    const newQty = parseInt(input.value) + change;
    if (newQty > 0) {
      input.value = newQty;
      updateCart(line, newQty);
    }
  }
}

function updateCart(line, quantity) {
  fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      line: line,
      quantity: quantity
    })
  })
  .then(response => response.json())
  .then(cart => {
    updateCartCount(cart.item_count);
    location.reload();
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function updateCartCount(count) {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = count;
    if (count > 0) {
      cartCount.style.display = 'flex';
    } else {
      cartCount.style.display = 'none';
    }
  }
}

// Add to cart form handling
document.addEventListener('DOMContentLoaded', function() {
  // Handle add to cart forms
  const addToCartForms = document.querySelectorAll('form[action*="/cart/add"]');
  addToCartForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(item => {
        // Update cart count
        fetch('/cart.js')
          .then(response => response.json())
          .then(cart => {
            updateCartCount(cart.item_count);
            alert('Added to cart!');
          });
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error adding to cart');
      });
    });
  });
  
  // Initialize cart count
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      updateCartCount(cart.item_count);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});