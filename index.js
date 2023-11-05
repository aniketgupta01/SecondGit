// let itemList  = document.querySelector('#items');

// //ParentNode
// // console.log(itemList.Node);
// // itemList.parentNode.style.backgroundColor='#f4f4f4'
// // console.log(itemList.parentNode.parentNode.parentNode);

// //ParentElement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor='#f4f4f4'
// // console.log(itemList.parentElement.parentElement.parentElement);

// //childNodes
// // console.log(itemList.childNodes);

// //children
// // console.log(itemList.children);

// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor='yellow';


// // //FirstChild
// // console.log(itemList.firstChild);

// // //FirstElementcChild
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent='Hel lo';

// //LastChild
// // console.log(itemList.lastChild);

// // //LastElementcChild
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent='Hello 4';

// //nextSibling
// // console.log(itemList.nextSibling);

// // //nextElementSibling
// // console.log(itemList.nextElementSibling);

// //previousSibling
// // console.log(itemList.previousSibling);

// // //previousElementSibling
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color='green'

// //Creating a element
// let newDiv = document.createElement('div');

// //add id
// newDiv.id = 'Hello 1';

// //add class
// newDiv.className = 'Hello';

// newDiv.setAttribute('title','Hello Div');

// //Add text to div

// let newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);


// //Adding div to the DOM
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');


// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize='30px'

// console.log(newDiv);

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);

function addItem(e){
    e.preventDefault();

    console.log(1);
    
    //Get input value
    let newItem = document.getElementById('item').value;
    if(newItem == ''){
        alert('Enter some value')
        
    }

    if(newItem !== ''){

    //Create new li element
    let li = document.createElement('li');

    //Add classname
    li.className='list-group-item';
    
    // add next node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button 
    let deleteBtn = document.createElement('button');
    
    //add classes
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'))

    //create edit button
    let editBtn = document.createElement('button');

    //add classes
    editBtn.className='btn btn-primary btn-sm float-right mr-2'

    //adding text node
    editBtn.appendChild(document.createTextNode('Edit'));

    
    //append delete button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);


    //append li to list
    itemList.append(li);
    }

    


}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            let item = e.target.parentElement;
            itemList.removeChild(item);
        }
    }

}