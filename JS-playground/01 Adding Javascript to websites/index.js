
//add timer to change text H1 every 5 seconds to hello world to goodbye world


function changeText() {
    document.querySelector('h1').innerHTML = 'Hello World';
    alert('Hello World');
    document.querySelector('h1').innerHTML = 'Goodbye World';
    
}

changeText()