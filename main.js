'use strict';
const toggleBtn = document.querySelectorAll('.faq__item--btns');

function remove() {
  toggleBtn.forEach(btns => {
    btns.parentNode.classList.remove('active');
  });
}

toggleBtn.forEach(btns => {
  btns.addEventListener('click', () => {
    remove();
    btns.parentNode.classList.toggle('active');
  });
});
