// function eventfunction() {

//     console.log('I have clicked on the document');

// }

// //Adding Eventlistener
// document.addEventListener('click', eventfunction);
// //Removing EventListener(pass same function )
// document.removeEventListener('click', eventfunction);

// const content = document.querySelector("#wrapper");
// //if we pass event in function we can see what happening in the event
// content.addEventListener('click', function (event) {
//     console.log(event);
// })

//let links=document.querySelectorAll('a');
//let thirdLink=links[2];
//To prevent default action of tag using preventDefault.
// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('maza aaya ,aacha laga');
// });

let myDiv = document.createElement('div');
function parastatus(event) {
    console.log('Para' + event.target.textContent);
}
myDiv.addEventListener('click', parastatus);

for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i;
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');

element.addEventListener('click', function (event) {
    //sirf ye karenge to bith p tag and span tag par click karne se event trigger honga.
    //But agar if we only want event to trigger for span tag so we can use nodeName() method.
    if (event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai' + event.target.textContent);
    }
});



