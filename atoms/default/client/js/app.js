function quoteClicker() {
  var quoteCard = document.querySelectorAll('.quote-card');
  var container = document.querySelector('.blm-article-flex');
  console.log(quoteCard);
  console.log(container);
  for(var i =0; i < quoteCard.length; i++) {
    quoteCard[i].addEventListener('click', function(){
      container.classList.remove('quotes');
      container.classList.add('article');
    });
  }
}

function init() {
  quoteClicker();
}init();
