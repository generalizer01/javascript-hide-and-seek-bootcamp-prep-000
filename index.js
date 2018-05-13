function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li')
  for (let i=0;i<ranks.length;i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML)+n
  }
}

function deepestChild() {
  document.querySelector('#')
}