

function makeListBig(){
    let currentList = document.getElementById('myList');
    let newListItem = document.createElement('li')
    newListItem.innerText = 'squirrel';

    currentList.appendChild(newListItem);
    console.log('ran makeListBig');
}