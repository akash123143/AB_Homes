// Ensure the script runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Toggle the frame panel
  const frameToggler = document.getElementById('frame-toggler');
  const framePanel = document.getElementById('frame-panel');
  const frameWrapper = document.getElementById('frame-wrapper');

  if (frameToggler) {
    frameToggler.addEventListener('click', () => {
      framePanel.classList.toggle('hidden');
      frameToggler.innerText = framePanel.classList.contains('hidden') ? 'Show Panel' : 'Hide Panel';
    });
  }

  // Add to Cart functionality
  const addToCartButton = document.getElementById('add-to-cart');
  const cartModal = document.getElementById('product-cart-modal');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
      cartModal.style.display = 'block';
      setTimeout(() => {
        cartModal.style.display = 'none';
      }, 3000); // Show modal for 3 seconds
    });
  }

  // Switch between device views
  const devicesContainer = document.getElementById('devices');
  const frame = document.querySelector('.frame');

  if (devicesContainer) {
    devicesContainer.innerHTML = `
      <button id="desktop-view">Desktop</button>
      <button id="tablet-view">Tablet</button>
      <button id="mobile-view">Mobile</button>
    `;

    document.getElementById('desktop-view').addEventListener('click', () => {
      frame.style.width = '100%';
      frame.style.height = '100vh';
    });

    document.getElementById('tablet-view').addEventListener('click', () => {
      frame.style.width = '768px';
      frame.style.height = '1024px';
    });

    document.getElementById('mobile-view').addEventListener('click', () => {
      frame.style.width = '375px';
      frame.style.height = '667px';
    });
  }
  
  // Cart button functionality
  const cartButton = document.getElementById('cart');
  
  if (cartButton) {
    cartButton.addEventListener('click', () => {
      window.location.href = 'https://www.templatemonster.com/cart';
    });
  }
});
