//Approach 1:
//adding para with different methods and measuring performance using performance.now().
//In this approach  DOM will be manipulated 300 times 
//create + set text content + append to container(for each para)(3 times for each para).

// const t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;
//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took" + (t2 - t1) + "ms");


//optimizing a bit

//isme hamne Batching ki hai.
//we have created a container myDiv usme 100 para append kiye then append it to document body.
//isme 201 baar DOM MANUIPULATE HONGA
//create + set text content + append to container(for each para)(3 times for each para)+1 for appending in document 
//However due to js loop optimizations actual number is close to 201 so Batching is a  better approach.
//so this is an better approach

//Approach 2:
// const t3 = performance.now();

// let myDiv = document.createElement('div');

// for (let i = 1; i <= 100; i++) {
//     let Element = document.createElement('p');
//     Element.textContent = 'This is para' + i;

//     myDiv.appendChild(Element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took" + (t4 - t3) + "ms");


//fragments
//Approach 3:USING FRAGMENTS
//This is better than batching but still this depends on usecases.
//In this approach we create temporary container outside document flow by fragment.
//Phir fragment me append karte rahenge
//in this Dom will be manipulated only twice eek baar fragments container banate huye and eek baar usse append karte huye
//yaha par.create element and .textContent document par hi hai but at last append fragment container par hai which
//is why it doesnot affect DOM,so thats why DOM will be manipulated only twice.


// const t5 = performance.now();
// //creating temporary container outside document flow.
// let fragment = document.createDocumentFragment();
// for (let i = 1; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;
//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);//in this case 1 reflow and 1 repaint.

// const t6 = performance.now();

// console.log("this took" + (t6 - t5) + "ms");
//This all ars synchronous functions
//will execute line by line.
function addPara() {
    let para = document.createElement('p');
    para.textcontent = 'Kya haal chaal';
    document.body.appendChild(para);
}

function addNewMessage() {
    let para = document.createElement('p');
    para.textContent = 'Js is single';
    document.body.appendChild(para);
}

addPara();
addNewMessage();

