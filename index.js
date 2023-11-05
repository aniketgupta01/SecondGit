let itemList  = document.querySelector('#items');

//ParentNode
// console.log(itemList.Node);
// itemList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';


// //FirstChild
// console.log(itemList.firstChild);

// //FirstElementcChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hel lo';

//LastChild
// console.log(itemList.lastChild);

// //LastElementcChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

//nextSibling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'

//Creating a element
let newDiv = document.createElement('div');

//add id
newDiv.id = 'Hello 1';

//add class
newDiv.className = 'Hello';

newDiv.setAttribute('title','Hello Div');

//Add text to div

let newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);


//Adding div to the DOM
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');


container.insertBefore(newDiv, h1);

newDiv.style.fontSize='30px'

console.log(newDiv);