let keydownObject = document.querySelector('#keydownEnter')

keydownObject.addEventListener('keydown', (event)=>{
    if (event.code == 'Enter') { // enter 했을때만 작동하게 만드는 문법
        console.log(`key down : ${event.code}`)
    }
});