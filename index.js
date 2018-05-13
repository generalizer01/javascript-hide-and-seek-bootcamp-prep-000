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
  let search = document.querySelector('#grand-node')
  var child = ''
  while (child==='')  {
    
    if (search.children[0]===undefined) {
      child = search
      console.log(`We found it! The child is ${child}`)
    }
    else {
      search = search.children[0]
      console.log('Searching deeper')
    }
    
  }
  return child
}