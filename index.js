let buttonOne = document.createElement('button'); 
let buttonOneLabel = document.createElement('label'); 
buttonOne.appendChild(buttonOneLabel); 
document.body.appendChild(buttonOne); 
buttonOne.innerHTML = "CLICK"
buttonOne.style.backgroundColor = 'green'
buttonOne.style.fontSize = '50px'

let buttonTwo = document.createElement('button'); 
let buttonTwoLabel = document.createElement('label'); 
buttonTwo.appendChild(buttonTwoLabel); 
document.body.appendChild(buttonTwo); 
buttonTwo.innerHTML = "CLICK"
buttonTwo.style.backgroundColor = 'RED'
buttonTwo.style.fontSize = '50px'

let buttonThree = document.createElement('button'); 
let buttonThreeLabel = document.createElement('label'); 
buttonThree.appendChild(buttonThreeLabel); 
document.body.appendChild(buttonThree); 
buttonThree.innerHTML = "CLICK"
buttonThree.style.backgroundColor = 'CYAN'
buttonThree.style.fontSize = '50px'

let count = 0; 

const buttons = document.querySelectorAll('button'); 

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        count++; 
        if (count === 1) {
            console.log(`You clicked the button ${count} time`)
        }
        else {
            console.log(`You clicked the button ${count} times`)
        }
        if (count % 2 == 0) {
            e.target.style.background = 'blue';
        }
        else if (count % 3== 0) {
            e.target.style.background = 'red';
        }
        else {
            e.target.style.background = 'orange';
        }
    })

})

// buttonOne.addEventListener('click', () => {
//     count++; 
//     if (count === 1) {
//         console.log(`You clicked the button ${count} time`)
//     }
//     else {
//         console.log(`You clicked the button ${count} times`)
//     }
// })
