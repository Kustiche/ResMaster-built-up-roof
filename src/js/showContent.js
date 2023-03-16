const cardButton = document.querySelector('.services__button-more');
const itemsChange = document.querySelectorAll('.services__item--hidden')

cardButton.addEventListener('click', function () {
  itemsChange.forEach(function(itemChange) {
    itemChange.classList.add('active')
  });
  cardButton.classList.add('none');
});