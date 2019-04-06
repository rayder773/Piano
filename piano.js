const list = document.querySelectorAll('li');

list.forEach(element => {
    element.addEventListener('click', function() {
        playSound(element)
        
    }); 
});

document.addEventListener('keydown', function(event) {
    let pressedKey = event.keyCode;
    list.forEach(function(item) {
        if(item.textContent.trim().toUpperCase().charCodeAt(0) == pressedKey) {
            playSound(item);
        }
    })
});

function playSound(el) {
    el.classList.add('active');
    el.firstElementChild.play();
        setTimeout(function() {
            el.classList.remove('active');
        }, 100);
}