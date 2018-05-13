function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let out = document.getElementById('nested').querySelector('.target');
  return out;
}