# Project Related to DOM

## Project link
[click here](www.google.com)

# Solution code

## Project 1

```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons)
buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(e){
        // console.log(e)
        // console.log(e.target)
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
    });
});

```