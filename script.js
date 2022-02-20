// to run in introduce
function animateContent() {
    paragraph = document.querySelector('.ani');
    if (paragraph.innerHTML == 'learn from data'){
        paragraph.innerHTML = 'build machine learning models'
    } else if (paragraph.innerHTML == 'build machine learning models'){
        paragraph.innerHTML = 'philosophize'
    } else if (paragraph.innerHTML == 'philosophize') {
        paragraph.innerHTML = 'do maths'
    } else if (paragraph.innerHTML == 'do maths'){
        paragraph.innerHTML = 'watch musicals'
    } else if (paragraph.innerHTML == 'watch musicals') {
        paragraph.innerHTML = 'try to be unbiased'
    } else if (paragraph.innerHTML == 'try to be unbiased') {
        paragraph.innerHTML = 'drink enough fluid a day'
    } else if (paragraph.innerHTML == 'drink enough fluid a day') {
        paragraph.innerHTML = 'love my mom and dad'
    }  else {
        paragraph.innerHTML = 'learn from data'
    }
    }  
window.setInterval(animateContent, 1000);
      
    
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
    }

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
    }

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// expand panels in learn
function toggleOpen() {
  console.log('Hello');
  var parent = this.parentNode;
  parent.classList.toggle('open');
    }
function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
        console.log(this)
    }
}
const learnpans1 = document.querySelectorAll('.learnsubpan1')

learnpans1.forEach(panel => panel.addEventListener('click', toggleOpen));

const learnpans = document.querySelectorAll('.learnpan')
learnpans.forEach(panel => panel.addEventListener('transitionstart', toggleActive));