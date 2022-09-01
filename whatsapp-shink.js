const content = document.querySelector('[data-shrink="yes"]');

const span = document.querySelector('[data-shrink="yes"] span')

span.classList.add('aparecer')


setInterval(function() {
    content.classList.toggle('shrink')
}, 7000)

setTimeout(function(){
    setInterval(function() {
    span.classList.toggle('aparecer')
}, 7000)
}, 200)
