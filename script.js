document.querySelectorAll('.rounded-4').forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const icons = this.querySelectorAll('i');
    icons[0].classList.toggle('d-none');
    icons[1].classList.toggle('d-none');
  });
});

document.querySelectorAll('.card-body').forEach(function(cardBody) {
  const cartButtons = cardBody.querySelectorAll('.mb-1');
  cartButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      cartButtons[0].classList.toggle('d-none');
      cartButtons[1].classList.toggle('d-none');
    });
  });
});
