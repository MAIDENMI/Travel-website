// Define packages
const packages = [
  {
    title: 'Maldives Package',
    price: '$999',
    features: [
      'Round-trip airfare',
      '6 nights in a beachfront bungalow',
      'Island hopping tour',
      'Snorkeling and diving experiences',
      'Sunset dolphin cruise',
    ],
  },
  {
    title: 'Japan Package',
    price: '$1299',
    features: [
      'Round-trip airfare',
      '9 nights exploring Japanese culture',
      'Visit to historic temples',
      'Sushi-making workshop',
      'Hiking in beautiful landscapes',
    ],
  },
  {
    title: 'Turkey Package',
    price: '$899',
    features: [
      'Round-trip airfare',
      '7 nights exploring Turkish delights',
      'Historic sites and ruins',
      'Hot air balloon ride in Cappadocia',
      'Bazaar shopping experience',
    ],
  },
];

// Wishlist array to store added packages
const wishlist = [];

// Display packages
function displayPackages() {
  const packageBoxes = document.querySelectorAll('.package-box');
  packageBoxes.forEach((packageBox, index) => {
    const addButton = packageBox.querySelector('.add-button');
    addButton.addEventListener('click', () => addToWishlist(packages[index]));
  });
}

// Update wishlist display
function updateWishlist() {
  const wishlistContent = document.querySelector('.wishlist-content');
  wishlistContent.innerHTML = '';

  wishlist.forEach(package => {
    const wishlistItem = document.createElement('li');
    wishlistItem.classList.add('wishlist-item');

    const packageTitle = document.createElement('h4');
    packageTitle.textContent = package.title;

    const packageDetails = document.createElement('ul');
    packageDetails.classList.add('package-features');
    package.features.forEach(feature => {
      const featureItem = document.createElement('li');
      featureItem.textContent = feature;
      packageDetails.appendChild(featureItem);
    });

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeFromWishlist(package));

    wishlistItem.appendChild(packageTitle);
    wishlistItem.appendChild(packageDetails);
    wishlistItem.appendChild(removeButton);

    wishlistContent.appendChild(wishlistItem);
  });


   // Add Checkout button
   if (wishlist.length > 0) {
    const checkoutButton = document.createElement('button');
    checkoutButton.classList.add('checkout-button');
    checkoutButton.textContent = 'Checkout';
    checkoutButton.addEventListener('click', () => checkout());

    wishlistContent.appendChild(checkoutButton);
  }
}


// Checkout function
function checkout() {
  // Replace this with your actual checkout logic
  alert('Redirecting to Checkout...');
}



// Add package to wishlist
function addToWishlist(package) {
  wishlist.push(package);
  updateWishlist();
}

// Remove package from wishlist
function removeFromWishlist(package) {
  const index = wishlist.findIndex(item => item.title === package.title);
  if (index !== -1) {
    wishlist.splice(index, 1);
    updateWishlist();
  }
}

// Display packages and wishlist on page load
window.onload = () => {
  displayPackages();
};
