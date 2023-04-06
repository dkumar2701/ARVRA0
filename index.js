const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.projInfo');
  
  boxes.forEach(box => {
    box.classList.toggle('hidden');
  });
});