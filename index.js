let inputBox = document.querySelector("#input")
let list = document.querySelector('.list');
inputBox.addEventListener('keyup', (event)=>
{
    if(event.key == 'Enter') {
        addItem(inputBox.value);
    }
})

function addItem(value) {
    if(value == "" || value == " "){
        alert('Please enter a valid input');
    }
    let newListItem = document.createElement('li') ;
    let text = document.createElement('div');
    text.className = 'text';

    let del = document.createElement('div');
    let deldiv = document.createElement('div');

    del.className = "delete";

    deldiv.className = "deldiv";

    del.innerText = "X";
    deldiv.appendChild(del);

    text.innerText = `${value}`;

    newListItem.appendChild(text);
    newListItem.appendChild(deldiv);

    list.appendChild(newListItem);
    inputBox.value = "";
    del.addEventListener('click',clicked());
}

function clicked() {
    let listItems = document.querySelectorAll('.delete');

    listItems.forEach(item => {
        item.addEventListener('click', (event) => {
            let clickedListItem = event.target.parentNode.parentNode;
            console.log(event);
            clickedListItem.remove();
        });
    });
}




